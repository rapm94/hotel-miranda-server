export{}
let mongoose = require('mongoose');



async function dbConnection() {
    try {
      await mongoose.connect(process.env.DB_CNN, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log('Connected to database')
    } catch (err) {
      console.log(err)
    }
  }

  module.exports = {
    dbConnection
  }