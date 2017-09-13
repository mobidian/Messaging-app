var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/', function (req, res, next) {
    //Fetching Data
  
       res.render('index');
   });

// router.get('/message/:msg', function (req, res, next) {
//     res.render('node',{message:req.params.msg});
// });

// router.post('/message', function (req, res, next) {
//     var message = req.body.message;
//     res.redirect('/message/'+message);
// });

// router.post('/', function (req, res, next) {
//     var email = req.body.email;
//     var user = new User({
//         firstName:'Rahul',
//         lastName:'Sahay',
//         password:'password',
//         email:email
//     });
//     user.save();
//     res.redirect('/');
// });
module.exports = router;
