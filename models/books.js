
const  mongoose  = require("mongoose");
const books=new mongoose.Schema({

    id: Number,
    name:String,
    contact:Number,
    author:String,
    description:String,
    pages:Number,
    publication:String,
    year:Number,
    price:Number,

})

module.exports=mongoose.model("database",books)