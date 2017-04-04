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
  const usersList = users.map((user) => {
    return user.firstName;
  }).join(' ')

  res.send(usersList);

});


app.get('/users/:id', function(req, res, next){
    const userId = users.find((item) => {
      return item.id === Number(req.params.id)
    })
    if (userId) {
      res.send(userId.firstName);
    }
    else {
      res.send('Cette page n\'existe pas');
    }

})



app.listen(5000, function(){
  console.log('port 5000 listen for a app express');
});
