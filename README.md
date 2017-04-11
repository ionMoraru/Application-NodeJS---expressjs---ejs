# js-express-routes

## Pour lancer le projet :  

###  npm i
###  npm run start-dev

## Ecrire 3 routes :

### 1. GET / => 'Home page'
### 2. GET /users => 'liste d\'utilisateur' ex. http://localhost:5000/users
### 3. GET /users/:lenomdelutilisateur => l'le nom de l'utilisateur est : lenomdelutilisateur'

### 4. GET /users => renvoie une vrai liste d'utilisateur base sur ce tableau

ex. Michel, Osman, Tandi

const users = [
  {id: 0, firstName: 'Michel'},
  {id: 1, firstName: 'Osman'},
  {id: 2, firstName: 'Tandi'},
  {id: 3, firstName: 'Daniel'},
  {id: 4, firstName: 'Faustino'},
  {id: 5, firstName: 'Ijacques'}
]

### 5. GET /users/:id => renvoie le prénom de l'utilsateur qui à cet ID

### 6. Faire la même en html avec ejs :

Par exemple, pour GET /users, il faut renvoyer une liste html (<ul><li>...)

#### References EJS, Bootstrap4,  :

* http://ejs.co/
* http://expressjs.com/fr/guide/using-template-engines.html
* https://scotch.io/tutorials/use-ejs-to-template-your-node-application
* https://v4-alpha.getbootstrap.com/components/card/
* https://coligo.io/templating-node-and-express-apps-with-ejs/




js-express-routes

Start up :

créer votre projet

Créer votre repo sur github
Cloner votre projet (ex. git clone XXXXX)
cd XXXXX
npm init (répondre oui à toutes les questions)
touch index.js (création du fichier index.js)
atom . (pour ouvrir atom)
installer express dans votre projet

npm install express --save
créer un server express qui écoute en port 5000

cf. http://expressjs.com/fr/starter/hello-world.html
démarrer le server avec node ou nodemon

Avec node : node index.js
Avec nodemon : nodemon index.js (n'oubliez pas d'ainstaller nodemon globalement avant : npm i -g nodemon)
Exercices :

Exercice 1

Ecrire 3 routes :

GET / => 'Home page'
GET /users => 'liste d'utilisateur' ex. http://localhost:5000/users
GET /users/:lenomdelutilisateur => l'le nom de l'utilisateur est : lenomdelutilisateur'
Exercice 2

Pour les 3 routes, on veut, à présent, rendre du html à la place d'une simple string.

GET /users => renvoie une vrai liste d'utilisateur basé sur ce tableau
ex. Michel, Osman, Tandi

const users = [
  {id: 1, firstName: 'Osman', pseudoGithub: 'xxx'},
  {id: 2, firstName: 'Tandi', pseudoGithub: 'xxx'},
  {id: 3, firstName: 'Daniel', pseudoGithub: 'xxx'},
  {id: 4, firstName: 'Faustino', pseudoGithub: 'xxx'},
  {id: 5, firstName: 'Ijacques', pseudoGithub: 'xxx'}
]
GET /users/:id => renvoie le prénom de l'utilsateur qui à cet ID
Exercice 3

Faire la même en html avec ejs :
Par exemple, pour GET /users, il faut renvoyer une liste html (<ul><li>...)
References EJS :

http://ejs.co/
http://expressjs.com/fr/guide/using-template-engines.html
Styliser votre rendu avec css
Exercice 4 : Créer des routes qui gérent les projets github des utilisateur

créer un tableau js de projets avec la forme suivante :
const projects = [

 {
    id: 0,
    userId: 3, // le repo doit correspondre un utilisateur du tableau 'users'
    name: xxx
    githubUrl : xxxx
    githubRepo : xxxx
 },
 {
    id: 1,
    userId: 2, // le repo doit correspondre un utilisateur du tableau 'users'
    name: xxx
    githubUrl : xxxx
    githubRepo : xxxx
 },
 {
    id: 2,
    userId: 4, // le repo doit correspondre un utilisateur du tableau 'users'
    name: xxx
    githubUrl : xxxx
    githubRepo : xxxx
 }
];
faire une route /projects/ qui rend une liste html de tous les projets

faire une route /projects/:id qui rend une page de projet

Dans le rendu de la route /projects/, rajouter, pour chaque projet, le lien vers la page du projet correspondant (ex. /projects/0)

faire une route user/:userId/projects/ qui rend une liste html des projets d'un utilisateur

Dans le rendu de la route user/:userId/projects/, rajouter, pour chaque projet, le lien vers la page du projet correspondant (ex. /projects/0)

Exercice 5 : Créer un middleware qui intercepte les errors et les écrit dans le terminal :

trouver le guide de creation de middleware
mettre en place un logger
Exercice 6 : Gérer ses response

Trouver la doc de response de la librairie express
Créer 2 routes qui renvoie les même donnée en JSON qui /users et /users/:id. Les routes seront :
/api/users
/api/users/:id
Créer une route qui gére toutes les fausses routes (celles qui ne sont pas spécifiées par notre app) et qui renvoie un status 4O4.
Exercice 7 : Base de données

installer posgresql ...
