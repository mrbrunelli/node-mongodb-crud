require("dotenv/config")
const mongoose = require("mongoose")

const URI = process.env.URI
const DB_NAME = process.env.DB_NAME

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: DB_NAME
}, (err) => {
    if (!err) {
        console.log("Connection successfully!")
    } else {
        console.log("Failed to connect!")
    }
})

module.exports = mongoose


