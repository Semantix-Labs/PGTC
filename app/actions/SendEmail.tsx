/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

// Validation schema
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  country: z.string().min(1, "Country is required"),
  arrivalDate: z.string().min(1, "Arrival date is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required")
})

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function sendEmail(prevState: any, formData: FormData) {
  // Introduce artificial delay to simulate network request
  await new Promise(resolve => setTimeout(resolve, 1500))

  try {
    // Validate form data
    const validatedFields = contactFormSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      country: formData.get("country"),
      arrivalDate: formData.get("arrivalDate"),
      subject: formData.get("subject"),
      message: formData.get("message")
    })

    // If validation fails, return error messages
    if (!validatedFields.success) {
      return {
        message: validatedFields.error.errors[0].message,
        success: false,
      }
    }

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_TO,
      subject: `New Contact Form Submission: ${validatedFields.data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        ${Object.entries(validatedFields.data).map(([key, value]) => 
          `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</p>`
        ).join('\n')}
      `,
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