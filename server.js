//load the things we need
const express = require('express');
const app = express();
const path = require ('path');

//the users data
const users = [
  {id: 0,
    firstName: 'Michel',
    url:'https://image.spreadshirtmedia.net/image-server/v1/compositions/116184528/views/1,width=800,height=800,appearanceId=363,version=1420445120/cool-swag-hipster-moustache-boss-man-father-sweat-shirts-sweat-shirt-homme.jpg',
    Descrip: 'Hey je suis Michel un apprenant full-stack-js a Simplon co. Je suis developpeur web junior. J ai envie d apprendre plus!'},
  {id: 1,
    firstName: 'Osman',
    url: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
    Descrip: 'Hey je suis Osman un apprenant full-stack-js a Simplon co. Je suis developpeur web junior. J ai envie d apprendre plus!'},
  {id: 2,
    firstName: 'Faust',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDy3SPHXS88NLXfV9PG7bO28CKxu-GfRSPAaGv2Fn4Z-Fp4aKq',
    Descrip: 'Hey je suis Faust un apprenant full-stack-js a Simplon co. Je suis developpeur web junior. J ai envie d apprendre plus!'},
  {id: 3,
    firstName: 'Tandi',
    url: 'http://i.imgur.com/RRUe0Mo.png',
    Descrip: 'Hey je suis Tandi un apprenant full-stack-js a Simplon co. Je suis developpeur web junior. J ai envie d apprendre plus!'},
  {id: 4,
    firstName: 'Daniel',
    url: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
    Descrip: 'Hey je suis Daniel un apprenant full-stack-js a Simplon co. Je suis developpeur web junior. J ai envie d apprendre plus!'},
  {id: 5,
    firstName: 'Faustino',
    url:'http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg',
    Descrip: 'Hey je suis Faustino un apprenant full-stack-js a Simplon co. Je suis developpeur web junior. J ai envie d apprendre plus!'},
  {id: 6,
    firstName: 'Ijacques',
    url:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRvnIPS4klvQ7Wj69L5nKvtdSwfy0zcnqJ4iB4qV7MdjlfxZdPK',
    Descrip: 'Hey je suis Ijacques un apprenant full-stack-js a Simplon co. Je suis developpeur web junior. J ai envie d apprendre plus!'},
  {id: 7,
    firstName: 'Ion',
    url: 'http://braindamaged.fr/wp-content/uploads/2015/12/le-monde-de-dory-les-nouveaux-amis-de-dory-image-une-631x250.jpg',
    Descrip: 'Hey je suis Ion un apprenant full-stack-js a Simplon co. Je suis developpeur web junior. J ai envie d apprendre plus!'}
]

// the projects Data

const professions = [

 {
    id: 0,
    userId: 1,
    name: 'Michel',
    url:'http://www.heberger-image.fr/data/images/74971_43d762ca733a839226415450b0dbf9d2_1460028494.jpg',
    profession: 'Écologiste',
    githubUrl: 'https://github.com/yvan-sraka',
    githubRepo: 'https://github.com/ionMoraru/Application-NodeJS---expressjs---ejs'
 },
 {
    id: 1,
    userId: 7,
    url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQVF4vOg81IV_e6mJprZHn44R0u13BZJlGUF0Vt757JDDly1-F',
    name: 'Osman',
    profession: 'Scientiste',
    githubUrl: 'https://github.com/Osmanah',
    githubRepo: 'https://github.com/Osmanah/server-express'
 },
 {
    id: 2,
    userId: 2,
    name: 'Faust',
    url: 'http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/4/11/1397210130748/Spring-Lamb.-Image-shot-2-011.jpg',
    profession: 'Designer',
    githubUrl: 'https://github.com/',
    githubRepo: 'https://github.com/ionMoraru/Application-NodeJS---expressjs---ejs'
 },
 {
    id: 3,
    userId: 2,
    name: 'Tandi',
    url: 'http://www.thinkstockphotos.com/ts-resources/images/home/TS_AnonHP_462882495_01.jpg',
    profession: 'Info-Graphe',
    githubUrl: 'https://github.com/yvan-sraka',
    githubRepo: 'https://github.com/ionMoraru/Application-NodeJS---expressjs---ejs'
 },
 {
    id: 4,
    userId: 2,
    name: 'Daniel',
    url: 'https://media.koreus.com/201701/allez-faire-loutre.jpg',
    profession: 'Developpeur',
    githubUrl: 'https://github.com/hakimben',
    githubRepo: 'https://github.com/ionMoraru/Application-NodeJS---expressjs---ejs'
 },
 {
    id: 5,
    userId: 2,
    name: 'Faustino',
    url:'http://wowslider.com/sliders/demo-23/data1/images/hohenschwangau532864.jpg',
    profession: 'Technicien',
    githubUrl: 'https://github.com',
    githubRepo: 'https://github.com/ionMoraru/Application-NodeJS---expressjs---ejs'
 },
 {
    id: 6,
    userId: 2,
    name: 'Ijacques',
    url:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ-vfilV-zPZqO6bDwK34hn_AmBpoEJdnl5nhuQB-2Pjmgm8qsX',
    profession: 'Photographe',
    githubUrl: 'https://github.com/alexcarpenter/',
    githubRepo: 'https://github.com/ionMoraru/Application-NodeJS---expressjs---ejs'
 },
 {
    id: 7,
    userId: 2,
    name: 'Ion',
    url: 'http://www.geeksandcom.com/wp-content/uploads/2016/04/Rogue-One-A-Star-Wars-Story-Teaser-Preview-Image.jpg',
    profession: 'Yogaiste',
    githubUrl: 'https://github.com/ionMoraru',
    githubRepo: 'https://github.com/ionMoraru/Application-NodeJS---expressjs---ejs'
 }

];

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

app.get('/professions', function(req, res, next){
  // const usersList = users.map((user) => {
  //   return user.firstName;
  // }).join(' ')
  res.render('Pages/professions', {professions});

});


app.get('/professions/:id', function(req, res, next){
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



app.listen(5000, function(){
  console.log('port 5000 listen for a app express');
});
