import nodemailer from "nodemailer";
import { validateEmailData } from "../Model/EmailModel.js";

export async function sendEmail(req, res) {
  try {
    validateEmailData(req.body);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"${req.body.name}" <${process.env.EMAIL_USER}>`, // sender = tumhara gmail
      to: process.env.EMAIL_USER, // receiver = tumhara gmail
      replyTo: req.body.email, // user ka email jisko reply jayega
      subject: req.body.subject,
      text: `From: ${req.body.name} <${req.body.email}>\n\n${req.body.text}`,
    });

    res.json({ message: "✅ Email sent successfully", info });
  } catch (err) {
    console.error("❌ Email error:", err);
    res.status(400).json({ error: err.message });
  }
}
