const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const env = require("dotenv").config();

router.post("/mailer", async (req, res, next) => {
  console.log("email:" + process.env.email + "pass" + process.env.pass);

  const transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "khattakabdulhafeeez@gmail.com",
      pass: "abdulhafeez##",
    },
  });

  const info = await transporter.sendMail({
    from: '"Each-One teach-One Community" <khattakabdulhafeeez@gmail.com>',
    to: `${req.body.reciever}`,
    subject: `${req.body.subject}`,
    html: `From: ${req.body.sender} <br /> ${req.body.message}`,
  });

  if (info.messageId) {
    console.log("Message sent: %s, info.message");
    res.send(info.messageId);
  } else {
    res.send({ msg: "failure" });
  }
});

module.exports = router;
