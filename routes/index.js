var express = require('express');
var router = express.Router();

const book=[];

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


router.post('/register_book', function(req, res, next) {
  book.push(req.body);
  res.redirect("/show_book")
  
});

// router.post('/register', function(req, res, next) {
//   const data = req.body;
//   res.render('register', { data : data })
  
// });
router.get('/show_book', function(req, res, next) {
  res.render('show_book',{book:book});
});

router.get('/details/:index', function(req, res, next) {
  const index= req.params.index;
  const Books = book[index];
  res.render('details',{book : Books, index:req.params.index  });
});
 
router.get('/delete/:index',function(req,res,next){
  book.splice(req.params.index, 1)
  res.redirect('/show_book');

})  

router.get('/update/:index', function(req, res, next) {
  const index= req.params.index;
  const Books = book[index];
  res.render('update',{book : Books, index:req.params.index  });
});

router.post('/update/:index', function(req, res, next) {
  book[req.params.index]=req.body;
  res.redirect('/details/:index');
});


module.exports = router;
