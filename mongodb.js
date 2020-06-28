//CRUD operations

const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect ")
  }
  const db = client.db(databaseName)

  db.collection("tasks")
    .deleteOne({
      description: "haircut"
    })
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.log(error)
    })
})

//   db.collection("tasks")
//     .updateMany(
//       { completed: false },
//       {
//         $set: {
//           completed: true
//         }
//       }
//     )
//     .then(result => {
//       console.log(result)
//     })
//     .catch(error => {
//       console.log(error)
//     })
// })

// db.collection("tasks").insertMany(
//   [
//     { description: "haircut", completed: true },
//     { description: "exercise", completed: false },
//     { description: "studying", completed: false }
//   ],
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert data.")
//     }
//     console.log(result.ops)
//   }
// )
//   db.collection("tasks").findOne({ _id: new mongodb.ObjectID("5eee2c34b65b2c18e8aa5d75") }, (error, result) => {
//     if (error) {
//       return console.log("Unable to find!")
//     }

//     console.log(result)
//   })

//   db.collection("tasks").find({completed:false}).toArray((error,result)=>{
//     if(error){
//    return   console.log("Unable to fetch")
//     }
//     console.log(result)
//   })
