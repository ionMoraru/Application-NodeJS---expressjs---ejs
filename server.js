//load the things we need
const express = require('express');
const app = express();
const path = require ('path');
const bodyParser = require('body-parser');
const multer = require('multer'); //multer(for parsing multipart/form data) middleware
const upload = multer();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(upload.array()); // for parsing multipart/form-data
//the users data
const users = [
  {id: 0, firstName: 'Michel'},
  {id: 1, firstName: 'Osman'},
  {id: 2, firstName: 'Tandi'},
  {id: 3, firstName: 'Daniel'},
  {id: 4, firstName: 'Faustino'},
  {id: 5, firstName: 'Ijacques'},
  {id: 6, firstName: 'ion'},
  {id: 6, firstName: 'ivan'}

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

});
// POST http://localhost:5000/
// parameters sent with
app.post('/', function(req, res) {
    const searchName = req.body;
    console.log("am introdus", searchName.firstName);

    const findName = users.find((name)=>{
        console.log("tablo", name);
        return name.firstName[0].toUpperCase() === searchName.firstName.toUpperCase() ||  name.firstName.toUpperCase() === searchName.firstName.toUpperCase()
    });
    console.log("nume gasit", findName);
    if(findName){
     res.render('Pages/test', {findName});
    }else{
      console.log("erreur");
    }

});


app.listen(5000, function(){
  console.log('port 5000 listen for a app express');
});
