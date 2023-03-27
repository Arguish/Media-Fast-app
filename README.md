# Two-Days-BD

### Auth Endpoints

| METHOD | ENDPOINT     				| TOKEN | ROLE | DESCRIPTION           | POST PARAMS                                                 | RETURNS |
| ------ | ------------ 				| ----- | ---- | --------------------- | ----------------------------------------------------------- | ------- |
| POST   | /auth/signup 				| -     | -    | User Sign Up          | user_name, email, date_of_birth, password, confirm_password | token   |
| POST   | /auth/login  				| -     | -    | Delete skills from DB | email, password                                             | token   |

### Users Endpoints

| METHOD | ENDPOINT                  			| TOKEN | ROLE  | DESCRIPTION                   | POST PARAMS                | RETURNS                              |
| ------ | ------------------------  			| ----- | ----- | ----------------------------  | -------------------------- | ------------------------------------ |
| GET    | /users                    			| YES   | All   | Get all users                 | -                          | [{ users }]                          |
| GET    | /users/:userId            			| YES   | All   | Get one user                  | user_id                    | { user }                             |
| PUT    | /users/:userId            			| YES   | Admin | Update user                   | user_id                    | "User updated"                       |
| DELETE | /users/:userId            			| YES   | Admin | Remove one user               | user_id                    | "Profile deleted"                    |
| GET    | /users/:userId/preferences			| YES   | All   | Get user preferences          | user_id                    | [{user.preferences}]                 |
| POST   | /users/:userId/preferences/serie/:serieId	| YES   | All   | Add user select to preferences| user_id                    | [{user.preferences}]                 |
| POST   | /users/:userId/preferences/movie/:movieId	| YES   | All   | Add user select to preferences| user_id                    | [{user.preferences}]                 |


### Movie Endpoints

| METHOD | ENDPOINT                   			| TOKEN | ROLE   | DESCRIPTION                 | POST PARAMS                | RETURNS                             |
| ------ | ------------------------   			| ----- | -----  | --------------------------- | -------------------------- | ----------------------------------- |
| GET    | /movies                    			| YES   | All   | Get all movies               | -                          | [{ movie }]                         |
| GET    | /movies/:movieId           			| YES   | All   | Get one movie                | movie_id                   |  { movie }                          |
| PUT    | /movies/:movieId           			| YES   | Admin | Update movie                 | movie_id                   |  "Movie updated"                    |
| DELETE | /movies/:movieId           			| YES   | Admin | Remove one movie             | movie_id                   |  "Movie deleted"                    |


### Serie Endpoints

| METHOD | ENDPOINT                   			| TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                             |
| ------ | ------------------------   			| ----- | ----- | ---------------------------- | -------------------------- | ----------------------------------- |
| GET    | /series                    			| YES   | All   | Get all serie                | -                          | [{ series }]                        |
| GET    | /series/:serieId           			| YES   | All   | Get one serie                |  serie_id                  | { serie }                           |
| PUT    | /series/:seriesId          			| YES   | Admin | Update serie                 |  serie_id                  | "Serie updated"                     |
| DELETE | /series/:serieId           			| YES   | Admin | Remove one serie             |  serie_id                  | "Serie deleted"                     |

## Analisis

<img src="https://app.milanote.com/media/p/images/1PGwkP1PR83x1H/tFr/image.png" width="25%">

- Punto de vista usuario.

- Punto de vista administrador

- Tocar menos de 3 botones?

- Si hay descuadre/rechazo de capítulo => reset y rehacer

- Solo sugerencias de seguimientos

- Modo maratón/tele

- Qué veo? => sugerencias limitadas => rechazo de todas => salir.

- Dónde está la serie/película A la hora de registrarse => preguntas por gustos => swipping por opciones

---

Problema :

`Perdemos mucho tiempo buscando qué ver y dónde verlo, nos gustaría simplificar las cosas para que el poco tiempo del que disponemos sea disfrutando sin tener que estar eligiendo.`

---

### Estructura DB

#### Provisional

<img src="./Screenshot_5.png" width="100%">

---

[Figma](https://www.figma.com/file/6HmxlxnO5guiVslbWCFAz8/Untitled?node-id=0%3A1&t=YbxGSBsvTRDIlvJs-1)

## NPM I

- npm i -y
- npm i nodemon
- npm i express
- npm i morgan
- npm i dotenv
- npm i sequelize
- npm i mysql2
- npm i bcrypt
- npm i jsonwebtoken

---

## Tecnologias

<img src="https://logo.clearbit.com/nodejs.org" width="21.5%"><img src="https://logo.clearbit.com/dotenv.org" width="21.5%"><img src="https://logo.clearbit.com/expressjs.org" width="21.5%">

<img src="https://codezombiech.gallerycdn.vsassets.io/extensions/codezombiech/gitignore/0.9.0/1658773731427/Microsoft.VisualStudio.Services.Icons.Default" width="21.5%"><img src="https://logo.clearbit.com/sequelize.org" width="21.5%"><img src="https://logo.clearbit.com/npmjs.org" width="21.5%">

<img src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/6a813a0c-ba36-40ae-82f3-85b420391de1.png?auto=format&q=50&w=80&h=80&fit=max&dpr=3" width="21.5%"><img src="https://cdn.iconscout.com/icon/free/png-256/nodemon-226039.png" width="21.5%"><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/morgan-freeman-1591029645.jpg?crop=0.668xw:1.00xh;0,0&resize=640:*" width="21.5%">

<img src="https://user-images.githubusercontent.com/8939680/57233882-20344080-6fe5-11e9-9086-d20a955bed59.png" width="21.5%">