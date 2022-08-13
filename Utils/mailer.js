const nodeMailer = require("nodemailer");
const sendMail = async (email, subject, htmlContent) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL_USER,
    // from: "Van Tuan admin@fptshop.com",
    to: email,
    subject: subject,
    text: htmlContent,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email has been sent");
  } catch (error) {
    console.log("send mail error");
  }
};
module.exports = { sendMail };
