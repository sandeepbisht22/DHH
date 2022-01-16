import { Router } from "express";
import nodemailer from "nodemailer";
const commonRouter = Router();

commonRouter.post("/sendemail", [], (req, res) => {
  const senderEmailName = process.env.SENDER_EMAIL_NAME;
  const receiverEmail = process.env.RECEIVER_EMAIL_NAME;
  const emailPassword = process.env.EMAIL_PASSWORD;
  const { subject, suggestedData } = req.body;
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: senderEmailName,
      pass: emailPassword,
    },
  });
  var mailOptions = {
    from: senderEmailName,
    to: receiverEmail,
    subject: subject,
    text: suggestedData,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.json({ error: "Email not sent due to error : " + error.message });
    } else {
      console.log("Email sent: " + info.response);
      res.json({ res: "Email sent: " + info.response });
    }
  });
});

export { commonRouter };
