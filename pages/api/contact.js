import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { email, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Godaddy",

    auth: {
      user: "info@clikplatform.nl",
      pass: process.env.SUPPORT_PASSWORD,
    },
  });
  const mailData = {
    from: email,
    to: email,
    subject: email.split("@")[0],
    text,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      return res
        .status(400)
        .send({ message: "An error occured! Please retry!" });
    } else {
      console.log(info);
      return res
        .status(200)
        .send({ message: "Message sent to us succesfully!" });
    }
  });
}
