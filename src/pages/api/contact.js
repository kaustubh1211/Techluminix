"use client "
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const { firstName, email, phone, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "kaustubhpatil1211@gmail.com", // ⬅️ Replace with your email
      pass: "bskd quva luuy ybbf", // ⬅️ Generate an app password in Gmail settings
    },
  });

  const mailOptions = {
    from: email,
    to: "info@techluminix.com", // ⬅️ Replace with your recipient email
    subject: `New Contact Form Submission: ${subject}`,
    text: `
      Name: ${firstName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Email Sent Successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ success: false, message: "Error Sending Email" });
  }
}
