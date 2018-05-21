var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});


// Página de creditos
router.get('/author',(req,res,next)=>{
	res.render('author');
});

module.exports = router;
