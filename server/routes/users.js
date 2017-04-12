const express = require('express');
const router = express.Router();
const path = require('path');
//the data
const users = require('../data/users');
/* GET users listing. */

router.get('/', function(req, res, next) {
  res.render('Pages/users', {users});
  //res.send('cucu');
});

router.get('/users/:id', function(req, res, next) {

    const userId = users.find((item) => {
      return item.id === Number(req.params.id)
    })
    if (userId) {
      res.render('Pages/userCard', {userId});
    }
    else {
      res.send('Cette page n\'existe pas');
    }

});

module.exports = router;
