import nodemailer from "nodemailer";

export const sendEmail = async (
  from: string,
  subject: string,
  text: string,
  html: string
) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    // secure: config.node_env === "production", // true for port 465, false for other ports
    auth: {
      user: "tanvirrashid881@gmail.com",
      pass: "tvdt vnfx okmk xavs",
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    // from: "tanvirrashid881@gmail.com", // sender address
    from, // sender address
    to : "tanvirrashid881@gmail.com", // list of receivers
    subject, // Subject line
    text, // plain text body
    html, // html body
  });

  // console.log("Message sent: %s", info.messageId);
};
