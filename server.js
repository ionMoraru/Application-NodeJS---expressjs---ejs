//load the things we need
const express = require('express');
const app = express();
const path = require ('path');
const bodyParser = require('body-parser');
const multer = require('multer'); //multer(for parsing multipart/form data) middleware
const upload = multer();
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(upload.array()); // for parsing multipart/form-data

const index = require('./server/routes/index');
const apprenants = require('./server/routes/users');
const professions = require('./server/routes/professions');




//set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname , 'views/Public')));//------------------------a voir



app.use('/', index);
app.use('/users', apprenants);
app.use('/professions', professions);
//---------------------------------------------------exemple of array method map
//app.get('/users', function(req, res, next){
  // const usersList = users.map((user) => {
  //   return user.firstName;
  // }).join(' ')
//   res.render('Pages/users', {users});
//
// });

// app.get('/professions', function(req, res, next){
//   // const usersList = users.map((user) => {
//   //   return user.firstName;
//   // }).join(' ')
//   res.render('Pages/professions', {professions});
//
// });




// app.get('/users/:id', function(req, res, next) {
//     const userId = users.find((item) => {
//       return item.id === Number(req.params.id)
//     })
//     if (userId) {
//       res.render('Pages/userCard', {userId});
//     }
//     else {
//       res.send('Cette page n\'existe pas');
//     }
//
// });



// POST http://localhost:5000/
// parameters sent with
app.post('/', function(req, res) {
    const searchName = req.body;
    console.log(searchName);
    console.log("am introdus", searchName.firstName);

    const findName = users.find((name)=>{
      //  console.log("tablo", name);
        return name.firstName[0].toUpperCase() === searchName.firstName.toUpperCase() ||  name.firstName.toUpperCase() === searchName.firstName.toUpperCase()
    });
    //console.log("nume gasit", findName);
    if(findName){
     res.render('Pages/test', {findName});
    }else{
      console.log("erreur");
    }

});


app.listen(port, function(){
  console.log('port 5000 listen for a app express');
});
