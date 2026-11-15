import { NextResponse } from "next/server"

// In-memory rate limiting map: ip -> timestamps[]
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = rateLimitMap.get(ip) || []
  const windowStart = now - RATE_LIMIT_WINDOW_MS
  const validTimestamps = timestamps.filter((t) => t > windowStart)

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, validTimestamps)
    return true
  }

  validTimestamps.push(now)
  rateLimitMap.set(ip, validTimestamps)
  return false
}

export async function POST(req: Request) {
  try {
    // 1. Rate limiting check
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1"

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many messages sent. Please wait a few minutes before trying again or message directly via WhatsApp.",
        },
        { status: 429 }
      )
    }

    const body = await req.json()
    const { name, email, service, message, honeypot } = body

    // 2. Honeypot spam trap
    if (honeypot && String(honeypot).trim().length > 0) {
      // Silently discard bot submission
      return NextResponse.json({
        success: true,
        message: "Message dispatched successfully.",
      })
    }

    // 3. Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    if (!message || typeof message !== "string" || message.trim().length < 8) {
      return NextResponse.json(
        { success: false, message: "Please enter a message of at least 8 characters." },
        { status: 400 }
      )
    }

    // 4. Dispatch email or notify via Web3Forms if API key is present
    const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || process.env.WEB3FORMS_KEY

    if (web3formsKey && web3formsKey !== "YOUR_KEY_HERE" && web3formsKey.length > 5) {
      const formPayload = {
        access_key: web3formsKey,
        name: name.trim(),
        email: email.trim(),
        service: service || "General Inquiry",
        message: message.trim(),
        subject: `New Inquiry from ${name.trim()} [Portfolio]`,
        from_name: "Muhammad Usman Portfolio",
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formPayload),
      })

      const data = await response.json()
      if (!data.success) {
        throw new Error(data.message || "Failed to dispatch through mail gateway.")
      }
    } else {
      // Fallback logging when operating without external key
      console.log("[CONTACT_INQUIRY]", {
        name: name.trim(),
        email: email.trim(),
        service,
        message: message.trim(),
        timestamp: new Date().toISOString(),
      })
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully. I will respond within 24 hours.",
    })
  } catch (error: unknown) {
    console.error("[API_CONTACT_ERROR]", error)
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while sending your message. Please reach out directly on WhatsApp or Email.",
      },
      { status: 500 }
    )
  }
}
