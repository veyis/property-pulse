import nodemailer from "nodemailer";

export default function (app) {
  app.post("/api/email", async (req, res) => {
    const { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      const info = await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_USER,
        subject: `New message from ${name}`,
        text: message,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while sending the email" });
    }
  });
}

// Path: app/api/properties/route.js
