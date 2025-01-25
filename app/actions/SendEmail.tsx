/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  country: z.string().min(1, "Country is required"),
  arrivalDate: z.string().min(1, "Arrival date is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
})

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function sendEmail(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulating a delay

  try {
    const validatedFields = contactFormSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      country: formData.get("country"),
      arrivalDate: formData.get("arrivalDate"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    })

    if (!validatedFields.success) {
      return {
        message: validatedFields.error.errors[0].message,
        success: false,
      }
    }

    const { name, email, phone, country, arrivalDate, subject, message } = validatedFields.data

    const emailHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; margin: 0; padding: 0;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <tr>
            <td style="padding: 40px;">
              <h2 style="color: #4CAF50; text-align: center; margin-bottom: 20px;">New Contact Form Submission</h2>
              <table cellpadding="10" cellspacing="0" border="0" width="100%" style="border-collapse: collapse;">
                <tr>
                  <td style="border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
                  <td style="border-bottom: 1px solid #eee;">${name}</td>
                </tr>
                <tr>
                  <td style="border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                  <td style="border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #1E88E5; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
                  <td style="border-bottom: 1px solid #eee;">${phone}</td>
                </tr>
                <tr>
                  <td style="border-bottom: 1px solid #eee;"><strong>Country:</strong></td>
                  <td style="border-bottom: 1px solid #eee;">${country}</td>
                </tr>
                <tr>
                  <td style="border-bottom: 1px solid #eee;"><strong>Arrival Date:</strong></td>
                  <td style="border-bottom: 1px solid #eee;">${arrivalDate}</td>
                </tr>
                <tr>
                  <td style="border-bottom: 1px solid #eee;"><strong>Subject:</strong></td>
                  <td style="border-bottom: 1px solid #eee;">${subject}</td>
                </tr>
              </table>
              <h3 style="color: #4CAF50; margin-top: 30px;">Message:</h3>
              <div style="background-color: #f9f9f9; border-left: 4px solid #4CAF50; padding: 15px; margin-top: 10px;">
                <p style="margin: 0;">${message}</p>
              </div>
              <p style="font-size: 12px; text-align: center; color: #888; margin-top: 30px;">This email was sent automatically. Please do not reply.</p>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_TO,
      subject: `New Contact Form Submission: ${subject}`,
      html: emailHTML,
    })

    return {
      message: "Message sent successfully!",
      success: true,
    }
  } catch (error) {
    console.error("Failed to send email:", error)
    return {
      message: "Failed to send message. Please try again later.",
      success: false,
    }
  }
}

