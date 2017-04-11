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
//the users data
const users = [

  {id: 0, firstName: 'Michel', url: 'https://image.spreadshirtmedia.net/image-server/v1/compositions/116184528/views/1,width=800,height=800,appearanceId=363,version=1420445120/cool-swag-hipster-moustache-boss-man-father-sweat-shirts-sweat-shirt-homme.jpg', Descrip: 'Hey je suis Michel un apprenant full-stack-js a Simplon co. Je suis developpeur web junior. J ai envie d apprendre plus!'},
  {id: 1, firstName: 'Osman', url: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg', Descrip: 'Hey je suis Osman un apprenant full-stack-js a Simplon co. Je suis developpeur web junior. J ai envie d apprendre plus!'},
  {id: 2, firstName: 'Faust', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDy3SPHXS88NLXfV9PG7bO28CKxu-GfRSPAaGv2Fn4Z-Fp4aKq', Descrip: 'Hey je suis Faust un apprenant full-stack-js a Simplon co. Je suis developpeur web junior. J ai envie d apprendre plus!'},
  {id: 3, firstName: 'Tandi', url: 'http://i.imgur.com/RRUe0Mo.png', Descrip: 'Hey je suis Tandi un apprenant full-stack-js a Simplon co. Je suis developpeur web junior. J ai envie d apprendre plus!'},
  {id: 4, firstName: 'Daniel', url: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg', Descrip: 'Hey je suis Daniel un apprenant full-stack-js a Simplon co. Je suis developpeur web junior. J ai envie d apprendre plus!'},
  {id: 5, firstName: 'Faustino', url: 'http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg', Descrip: 'Hey je suis Faustino un apprenant full-stack-js a Simplon co. Je suis developpeur web junior. J ai envie d apprendre plus!'},
  {id: 6, firstName: 'Ijacques', url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRvnIPS4klvQ7Wj69L5nKvtdSwfy0zcnqJ4iB4qV7MdjlfxZdPK', Descrip: 'Hey je suis Ijacques un apprenant full-stack-js a Simplon co. Je suis developpeur web junior. J ai envie d apprendre plus!'},
  {id: 7, firstName: 'Ion', url: 'http://braindamaged.fr/wp-content/uploads/2015/12/le-monde-de-dory-les-nouveaux-amis-de-dory-image-une-631x250.jpg', Descrip: 'Hey je suis Ion un apprenant full-stack-js a Simplon co. Je suis developpeur web junior. J ai envie d apprendre plus!'}
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


app.listen(port, function(){
  console.log('port 5000 listen for a app express');
});
