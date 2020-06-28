const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })

// const pass = new User({ password: "password" })
// pass
//   .save()
//   .then(() => {
//     console.log(pass)
//   })
//   .catch(error => {
//     console.log("Error", error)
//   })

// const me = new tasks({ description: "Complete node " })

// me.save()
//   .then(me => {
//     console.log(me)
//   })
//   .catch(error => {
//     console.log("Error", error)
//   })
