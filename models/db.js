
const mong= require("mongoose")
.connect("mongodb://127.0.0.1:27017/books")
.then(()=>console.log("database Connected"))
.catch (()=>console.log("err.message"))
