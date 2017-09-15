var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    //Fetching Data
  
       res.render('index');
   });


module.exports = router;
