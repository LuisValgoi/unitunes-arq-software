const nodemailer = require('nodemailer');

function getEmailTransport() {
  let sender = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    service: process.env.EMAIL_SERVICE,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_AUTH_USER,
      pass: process.env.EMAIL_AUTH_PASS
    }
  });

  return sender;
}

function getEmailTemplate(password, emailTo) {
  var template = {
    from: process.env.EMAIL_TEMPLATE_FROM,
    to: emailTo,
    subject: 'Password Reset Information',
    text: `Your new password is: ${password}`,
  };

  return template;
}

module.exports = {
  sendEmail(pass, emailTo) {
    getEmailTransport().sendMail(getEmailTemplate(pass, emailTo));
  }
};