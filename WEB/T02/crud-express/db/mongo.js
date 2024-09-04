



var mongoose = require("mongoose")
var mongoDB_URI = "mongodb://127.0.0.1:27017/webt02"
mongoose.connect(mongoDB_URI, {useNewUrlParser:true})
var db = mongoose.connection

db.on("connected",() => console.log("Mongo connected!"))
db.on("disconnected",() => console.log("Mongo disconnected!"))
db.on("error",() => console.log(error))