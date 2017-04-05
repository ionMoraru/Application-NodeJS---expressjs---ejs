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
