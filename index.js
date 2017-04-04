const express = require('express');
const app = express();
const users = [
  {id: 0, firstName: 'Michel'},
  {id: 1, firstName: 'Osman'},
  {id: 2, firstName: 'Tandi'},
  {id: 3, firstName: 'Daniel'},
  {id: 4, firstName: 'Faustino'},
  {id: 5, firstName: 'Ijacques'}
]


app.get('/', function(req, res, next){
  res.send("Home page");
});

app.get('/users', function(req, res, next){
  res.send(users.map((user) => {
    return user.firstName;
  }).join(' '));
});


app.get('/users/:nom', function(req, res, next){
  res.send('Le nome de l\'utilisateur est ' + req.params.nom );
})



app.listen(5000, function(){
  console.log('port 5000 listen for a app express');
});
