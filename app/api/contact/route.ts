import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
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
          message:
            "Too many messages sent. Please wait a few minutes before trying again or message directly via WhatsApp.",
        },
        { status: 429 }
      )
    }

    const body = await req.json()
    const { name, email, service, subject, message, honeypot } = body

    // 2. Honeypot spam trap
    if (honeypot && String(honeypot).trim().length > 0) {
      return NextResponse.json({
        success: true,
        message: "Thank you! Your message has been sent directly to Muhammad Usman.",
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

    const cleanName = name.trim()
    const cleanEmail = email.trim()
    const cleanService =
      (typeof service === "string" && service.trim()) ||
      (typeof subject === "string" && subject.trim()) ||
      "General Inquiry"
    const cleanMessage = message.trim()

    // 4. Configure Nodemailer Gmail SMTP transporter
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com"
    const smtpPort = Number(process.env.SMTP_PORT || "465")
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL ||
      process.env.CONTACT_EMAIL ||
      "contact@usman-devs.com"

    if (!smtpUser || !smtpPass) {
      console.error("[API_CONTACT_CONFIG_ERROR] Missing SMTP_USER or SMTP_PASS environment variables.")
      return NextResponse.json(
        {
          success: false,
          message:
            "Email service is temporarily unavailable. Please reach out directly via WhatsApp or Email.",
        },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    const submittedAt = new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Karachi",
    })

    const safeName = escapeHtml(cleanName)
    const safeEmail = escapeHtml(cleanEmail)
    const safeService = escapeHtml(cleanService)
    const safeMessageHtml = escapeHtml(cleanMessage).replace(/\r?\n/g, "<br />")

    const htmlBody = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Portfolio Inquiry</title>
        </head>
        <body style="margin:0;padding:24px;background-color:#F7F7FA;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;color:#0f172a;">
          <div style="max-width:600px;margin:0 auto;background-color:#ffffff;border:1px solid #D9DCE5;border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(15,23,42,0.06);">
            <div style="background:linear-gradient(135deg,#8B3DFF 0%,#6425D0 100%);padding:24px 28px;color:#ffffff;">
              <p style="margin:0 0 6px 0;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;opacity:0.9;">
                Portfolio Contact Form
              </p>
              <h1 style="margin:0;font-size:20px;font-weight:700;line-height:1.3;">
                New Client Inquiry from ${safeName}
              </h1>
            </div>

            <div style="padding:28px;">
              <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #EEF0F5;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#64748b;width:140px;">
                    Client Name
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #EEF0F5;font-size:14px;font-weight:600;color:#0f172a;">
                    ${safeName}
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #EEF0F5;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#64748b;">
                    Client Email
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #EEF0F5;font-size:14px;font-weight:600;">
                    <a href="mailto:${safeEmail}" style="color:#8B3DFF;text-decoration:none;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #EEF0F5;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#64748b;">
                    Service / Subject
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #EEF0F5;font-size:14px;font-weight:600;color:#0f172a;">
                    <span style="display:inline-block;padding:4px 10px;border-radius:999px;background-color:#F3ECFF;color:#6425D0;font-size:12px;font-weight:700;">
                      ${safeService}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#64748b;">
                    Received (PKT)
                  </td>
                  <td style="padding:10px 0;font-size:13px;color:#475569;">
                    ${escapeHtml(submittedAt)}
                  </td>
                </tr>
              </table>

              <div style="margin-top:20px;">
                <p style="margin:0 0 8px 0;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#64748b;">
                  Message &amp; Project Context
                </p>
                <div style="padding:16px 18px;border-radius:12px;background-color:#F7F7FA;border:1px solid #D9DCE5;font-size:14px;line-height:1.65;color:#1e293b;">
                  ${safeMessageHtml}
                </div>
              </div>

              <div style="margin-top:24px;text-align:left;">
                <a href="mailto:${safeEmail}?subject=${encodeURIComponent(`Re: ${cleanService} — Muhammad Usman`)}" style="display:inline-block;padding:11px 20px;border-radius:10px;background-color:#8B3DFF;color:#ffffff;font-size:13px;font-weight:600;text-decoration:none;">
                  Reply Directly to ${safeName}
                </a>
              </div>
            </div>

            <div style="padding:14px 28px;background-color:#F7F7FA;border-top:1px solid #EEF0F5;font-size:11px;color:#64748b;">
              Sent via Muhammad Usman Portfolio (usman-devs.com) &bull; Hit Reply to respond directly to ${safeEmail}.
            </div>
          </div>
        </body>
      </html>
    `

    const textBody = [
      `New Portfolio Inquiry`,
      `=====================`,
      `Name: ${cleanName}`,
      `Email: ${cleanEmail}`,
      `Service / Subject: ${cleanService}`,
      `Received (PKT): ${submittedAt}`,
      ``,
      `Message:`,
      cleanMessage,
    ].join("\n")

    await transporter.sendMail({
      from: `"Muhammad Usman Portfolio" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: `"${cleanName.replace(/"/g, "")}" <${cleanEmail}>`,
      subject: `[Portfolio Inquiry] ${cleanService} — ${cleanName}`,
      text: textBody,
      html: htmlBody,
    })

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent directly to Muhammad Usman.",
    })
  } catch (error: unknown) {
    console.error("[API_CONTACT_ERROR]", error)
    return NextResponse.json(
      {
        success: false,
        message:
          "An error occurred while sending your message. Please reach out directly on WhatsApp or Email.",
      },
      { status: 500 }
    )
  }
}
