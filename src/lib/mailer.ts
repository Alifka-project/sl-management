import nodemailer from 'nodemailer'

/**
 * Creates a configured nodemailer transporter from environment variables.
 * Shared by all server-side email routes so the SMTP configuration lives in a
 * single place.
 */
export function createMailTransporter() {
  return nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_EMAIL_HOST || 'smtp.example.com',
    port: parseInt(process.env.NEXT_PUBLIC_EMAIL_PORT || '587'),
    secure: process.env.NEXT_PUBLIC_EMAIL_SECURE === 'true',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER || 'your-email@example.com',
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD || 'your-password',
    },
  })
}
