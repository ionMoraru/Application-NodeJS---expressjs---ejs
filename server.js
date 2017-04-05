//load the things we need
const express = require('express');
const app = express();
const path = require ('path');

//the users data
const users = [
  {id: 0, firstName: 'Michel', url: 'https://image.spreadshirtmedia.net/image-server/v1/compositions/116184528/views/1,width=800,height=800,appearanceId=363,version=1420445120/cool-swag-hipster-moustache-boss-man-father-sweat-shirts-sweat-shirt-homme.jpg'},
  {id: 1, firstName: 'Osman', url: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg'},
  {id: 2, firstName: 'Tandi', url: 'http://i.imgur.com/RRUe0Mo.png'},
  {id: 3, firstName: 'Daniel', url: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg'},
  {id: 4, firstName: 'Faustino', url: 'http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg'},
  {id: 5, firstName: 'Ijacques', url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRvnIPS4klvQ7Wj69L5nKvtdSwfy0zcnqJ4iB4qV7MdjlfxZdPK'},
  {id: 6, firstName: 'Ion', url: 'http://braindamaged.fr/wp-content/uploads/2015/12/le-monde-de-dory-les-nouveaux-amis-de-dory-image-une-631x250.jpg'}
]


//set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname , 'views/Public')));//------------------------a voir


app.get('/', function(req, res, next){
  res.render('Pages/index');
});

app.get('/users', function(req, res, next){
  // const usersList = users.map((user) => {
  //   return user.firstName;
  // }).join(' ')
  res.render('Pages/users', {users});

});


app.get('/users/:id', function(req, res, next){
    const userId = users.find((item) => {
      return item.id === Number(req.params.id)
    })
    if (userId) {
      res.render('Pages/userCard', {userId});
    }
    else {
      res.send('Cette page n\'existe pas');
    }

})



app.listen(5000, function(){
  console.log('port 5000 listen for a app express');
});
