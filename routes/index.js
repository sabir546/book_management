var express = require('express');
var router = express.Router();
const database=require("../models/books")

// const book=[];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});


router.get('/register_book', function(req, res, next) {
  res.render('register_book');
});


router.post('/register_book',function(req, res, next) {
  // book.push(req.body);
  // res.redirect("/show_book")

  database.create(req.body)
  .then(()=>{
    res.redirect('/show_book')
  })
  .catch((error)=>{
    res.send(error)
  })
  
});


router.get('/show_book',async function(req, res, next) {
  
  try{
const book=await database.find()
  res.render('show_book',{book:book});
  }
  catch(error){
    res.send(error)
  }

});

router.get('/details/:id',async function(req, res, next) {
  try{
  const id= req.params.id;
  // const Books = book[index];
  const Books = await database.findById(id)
  res.render('details',{book : Books });

  }
  catch(error){
    res.send(error)
  }
});
 
router.get('/delete/:id',async function(req,res,next){
  try{
    await database.findByIdAndDelete(req.params.id)
    res.redirect('/show_book');
  
   }
   catch(error){
  res.send(error);
   }

})  

router.get('/update/:id', async function(req, res, next) {
 try{
 const book= await database.findById(req.params.id)
  res.render('update',{book:book});

 }
 catch(error){
res.send(error);
 }
});

router.post('/update/:id',async function(req, res, next) {
  
  try{
    await database.findByIdAndUpdate(req.params.id,req.body)
res.redirect(`/details/${req.params.id}`);
  }
  catch(error){
    res.send(error);
  }
});
module.exports = router;
