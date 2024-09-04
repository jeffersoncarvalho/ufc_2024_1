var mongoose = require("mongoose")
var mongoDB_URI = "mongodb://127.0.0.1:27017/webt04"



mongoose.connect(mongoDB_URI,{useNewUrlParser:true})
var db = mongoose.connection

db.on("connected",() => console.log("Mongo Connected!"))
db.on("disconnected",() => console.log("Mongo Disconnected!"))
db.on("error",(error) => console.log(error))