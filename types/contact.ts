export interface ContactFormData {
  name: string
  email: string
  service?: string
  message: string
  honeypot?: string // Spam protection
}

export interface ContactResponse {
  success: boolean
  message: string
}
