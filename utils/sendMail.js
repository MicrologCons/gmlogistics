const nodemailer = require("nodemailer");

const sendMail = async (
  { customer_email, customer_message, notification_message },
  res
) => {
  let status = "freeze";

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com", // Office 365 server
    port: 587, // secure SMTP
    secure: false, // false for TLS - as a boolean not string - but the default is false so just remove this completely
    tls: { ciphers: "SSLv3" },
    auth: {
      user: process.env.NEXT_PUBLIC_SERVICE_EMAIL,
      pass: process.env.NEXT_PUBLIC_SERVICE_EMAIL_PWD,
    },
  });

  const mailOptions = (customerAdress, message) => {
    return {
      from: process.env.NEXT_PUBLIC_SERVICE_EMAIL,
      to: customerAdress,
      subject: `Accusé de reception · Acknoledgement of Receipt`,
      html: message,
    };
  };

  [
    { address: customer_email, message: notification_message },
    {
      address: process.env.NEXT_PUBLIC_RECEIVING_EMAIL_ADRESS,
      message: customer_message,
    },
  ].forEach((target, index) => {
    console.log("Compiled ::: ", target?.address);
    transporter.sendMail(
      mailOptions(target?.address, target?.message),
      function (error, info) {
        if (error && status === "freeze") {
          console.log("A transporter send mail error::: ", error);
          status = "failed";
        } else {
          console.log("The mail send request :::", info);

          status = "success";
        }

        if (status === "success") {
          res.status(200).json({
            message: "Customer message sent",
          });
        } else {
          res.status(200).json({
            message: "Failed to send customer message",
          });
        }
      }
    );
  });

  return status;
};

module.exports = sendMail;
