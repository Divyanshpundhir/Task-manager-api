const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "amanpundhir8@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app ${name},Let we know how you get along with the app.`
  })
}

const sendByeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "amanpundhir8@gmail.com",
    subject: "Sorry to see you go!",
    text: `Good Bye ! ${name} Sorry for inconvience 🙁..Tell us how can we improve.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendByeEmail
}
