// ...existing code...
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    const request = req.body; // Pages API provides parsed body
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS, // use app password for Gmail
      },
    });

    await transporter.sendMail({
      from: `"Buzzklick" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Message</h3>
        <p><strong>First Name :</strong> ${request?.firstName}</p>
        <p><strong>Last Name :</strong> ${request?.lastName}</p>
        <p><strong>Email Address :</strong> ${request?.email}</p>
        <p><strong>Phone Number :</strong> ${request?.phone}</p>
        <p><strong>Company Name :</strong> ${request?.company}</p>
        <p><strong>Company Website :</strong> ${request?.website}</p>
        <p><strong>What are you interested in? :</strong> ${request?.interest}</p>
        <p><strong>Monthly Marketing Budget :</strong> ${request?.budget}</p>
        <p><strong>Tell us about your project :</strong> ${request?.message}</p>
      `,
    });

    return res.status(200).json({ success: true, message: "Saved successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Something went wrong" });
  }
}
// ...existing code...