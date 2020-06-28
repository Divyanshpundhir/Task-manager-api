const sgMail = require("@sendgrid/mail")
// const sendgridAPIKey = "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"
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
