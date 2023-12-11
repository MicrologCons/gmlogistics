// const fs = require("fs");
const Handlebars = require("handlebars");
const sendMail = require("../../utils/sendMail");

const mailTemplate = require("./templates/mail_template");
const receiptNotificationTemplate = require("./templates/receiving_template");

const mailHandler = async (req, res) => {
  let customerMessage = req?.body?.customer_message;
  let customerEmail = req?.body?.customer_email;
  let customerName = req?.body?.customer_name
    ? req?.body?.customer_name
    : req?.body?.customer_email.split("@")[0];
  let customerPhone = req?.body?.customer_phone;
  let customerSector = req?.body?.customer_field;

  let customerMsgTemplate = Handlebars.compile(mailTemplate);
  let receiptMsgTemplate = Handlebars.compile(receiptNotificationTemplate);

  const formatedMessage = customerMsgTemplate({ customer_name: customerName });
  const formatedReceipt = receiptMsgTemplate({
    lead_name: customerName,
    lead_email: customerEmail,
    lead_message: customerMessage,
    lead_phone: customerPhone,
  });

  sendMail(
    {
      customer_email: customerEmail,
      notification_message: formatedMessage,
      customer_message: formatedReceipt,
    },
    res
  ).catch((error) => {
    console.log("An error has occured when sendind the mail", error);
    res.status(200).json({
      message: "Failed to send customer message",
    });
  });
};

export default mailHandler;
