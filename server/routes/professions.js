

const express = require('express');
const router = express.Router();
const path = require('path');
//the data

const professions = require('../data/professions');
console.log('profesiiiiiii', professions);
/* GET users listing. */

router.get('/', function(req, res, next) {
  res.render('Pages/professions', {professions});
  //res.send('cucu');
  next();
});

router.get('/professions/:id', function(req, res, next){
    const professionId = professions.find((item) => {
      return item.id === Number(req.params.id)
    })
    if (professionId) {
      res.render('Pages/professionCard', {professionId});
    }
    else {
      res.send('Cette page n\'existe pas');
    }
});

module.exports = router;
