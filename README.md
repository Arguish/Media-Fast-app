# Two-Days-BD

## Endpoints

### Auth Endpoints

### Auth Endpoints


| METHOD | ENDPOINT     | TOKEN | ROLE | DESCRIPTION           |      PARAMS                                                                           | RETURNS |
| ------ | ------------ | ----- | ---- | --------------------- | ------------------------------------------------------------------------------------- | ------- |
| POST   | /auth/signup | -     | -    | User Sign Up          | user_name, user_nickname, image_url, email, date_of_birth, password, confirm_password | token   |
| POST   | /auth/login  | -     | -    | Delete skills from DB | email, password                                                                       | token   |


### User Endpoints


| METHOD | ENDPOINT                                 | TOKEN | ROLE  | DESCRIPTION                    |      PARAMS       | RETURNS              |
| ------ | -----------------------------------------| ----- | ----- | ------------------------------ | ----------------- | -------------------- |
| GET    | /user                               	    | YES   | Admin | Get all users                  | -                 | [{ users }]          |
| GET    | /user/me                                 | YES   | All   | Get own user                   | user_id           | { user }             |
| GET    | /user/me/user_media		            | YES   | All   | Get user_media                 | user_id           | [{user.preferences}] |
| GET    | /user/:userId                            | YES   | Admin | Get one user                   | user_id           | { user }             |
| GET    | /user/:userId/user_media		    | YES   | Admin | Get user_media                 | user_id           | [{user.preferences}] |
| PUT    | /user/me                           	    | YES   | All   | Update own user                | user_id           | "User updated"       |
| PUT    | /user/:userId                            | YES   | Admin | Update user                    | user_id           | "User updated"       |
| POST   | /user/me/user_media/:mediaId 	    | YES   | All   | Add user select to user_media  | user_id, media_id | [{user.preferences}] |
| POST   | /user/:userId                            | YES   | Admin | Create user                    | user_id           | "User created"       |
| DELETE | /user/me                                 | YES   | All   | Remove own user                | user_id           | "User updated"       |
| DELETE | /user/:userId                            | YES   | Admin | Remove one user                | user_id           | "Profile deleted"    |


### Media Endpoints


| METHOD | ENDPOINT                             |  TOKEN | ROLE  | DESCRIPTION      |      PARAMS | RETURNS         |
| ------ | ----------------------------------   |  ----- | ----- | ---------------- | ----------- | --------------- |
| GET    | /media                               | YES    | All   | Get all media    | -           | [{ media }]     |
| GET    | /media/newRandom  		        | YES    | All   | Get random media | media_id    | { media }       |
| GET    | /media/:mediaId                      | YES    | All   | Get one media    | media_id    | { media }       |
| PUT    | /media/:mediaId                      | YES    | Admin | Update media     | media_id    | "Media updated" |
| POST   | /media                               | YES    | Admin | Create  media    | body        | { media }       |
| DELETE | /media/:mediaId                      | YES    | Admin | Remove one media | media_id    | "Media deleted" |


### Platform Endpoints


| METHOD | ENDPOINT                             |  TOKEN | ROLE  | DESCRIPTION         |      PARAMS | RETURNS            |
| ------ | ----------------------------------   |  ----- | ----- | ----------------    | ----------- | ---------------    |
| GET    | /platform                            | YES    | All   | Get all platform    | -           | [{ platform }]     |
| GET    | /platform/:platformId                | YES    | Admin | Get one platform    | media_id    | { platform }       |
| PUT    | /platform/:platformId                | YES    | Admin | Update platform     | media_id    | "Platform updated" |
| POST   | /platform                            | YES    | Admin | Create  platform    | body        | { platform }       |
| DELETE | /platform/:platformId                | YES    | Admin | Remove one platform | media_id    | "Platform deleted" |



### Category Endpoints


| METHOD | ENDPOINT                             |  TOKEN | ROLE  | DESCRIPTION         |      PARAMS | RETURNS            |
| ------ | ----------------------------------   |  ----- | ----- | ----------------    | ----------- | ---------------    |
| GET    | /category                            | YES    | All   | Get all categories    | -           | [{ category }]     |
| GET    | /category/:categoryId                | YES    | All | Get one category    | category_id    | { category }       |
| PUT    | /category/:categoryId                | YES    | Admin | Update category     | category_id    | "category updated" |
| POST   | /category                		| YES    | Admin | Creates one category    | category_id    | { category }       |
| DELETE | /category/:categoryId                | YES    | Admin | Remove one category | category_id    | "category deleted" |


### Private_info Endpoints


| METHOD | ENDPOINT                             |  TOKEN | ROLE  | DESCRIPTION         |      PARAMS | RETURNS            |
| ------ | ----------------------------------   |  ----- | ----- | ----------------    | ----------- | ---------------    |
| GET    | /private_info                            | YES    | Admin   | Get all categories    | -           | [{ private_info }]     |
| GET    | /private_info/me                | YES    | All | Get one private_info    | private_info_id    | { private_info }       |
| GET    | /private_info/:userId                | YES    | Admin | Get one private_info    | private_info_id    | { private_info }       |
| PUT    | /private_info/me                | YES    | All | Update self private_info     | private_info_id    | "private_info updated" |
| PUT    | /private_info/:private_infoId                | YES    | Admin | Update private_info     | private_info_id    | "private_info updated" |
| POST    | /private_info                | YES    | Admin | Creates one private_info    | private_info_id    | { private_info }       |
| DELETE | /private_info/me                | YES    | All | Remove self private_info | private_info_id    | "private_info deleted" |
| DELETE | /private_info/:private_infoId                | YES    | Admin | Remove one private_info | private_info_id    | "private_info deleted" |


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

<img src="./image2.png" width="100%">

---

### User flow

User flow:

- User runs app.

#### User REGISTER:

- User inputs data.
- Category questions are shown.
- User selects.
- 'How many time question' is shown.
- User selects.
- \*Time is less than two hours?
- Show suggestions until user accepts.
- \*Time is more than two hours?
- Movie or show question is shown.
- User selects.
- Random in base of category previously selected.

---

#### USER LOGIN:

- User inputs data.
- 'How many time question' is shown.
  - Less than two hours?
  - \*Less than 4 and more than 1 pending?
    · 'Would you like to see new' question is shown.
    - If yes: random suggestion in base of user/category until user accepts.
    - If not: show user pending suggestions.
      - If user doesnt accept anyone: EXIT.
  - More than two hours?
  - \*'Show or movie' question is shown.
  - User selects movie.
  - (there wont be pending movies) User will be shown 8 random movies.
  - If user doesnt accept anyone
    - 'Would you like better to watch a show?' question is shown.
    - If yes: random suggestion in base of user/category until user accepts.
    - If not: EXIT.
  - User selects show.
    \*Less than 4 and more than 1 pending?
    · 'Would you like to see new' question is shown.
    - If yes: random suggestion in base of user/category until user accepts.
    - If not: show user pending suggestions.
      - If user doesnt accept any of suggestions.
        - 'Would you like to see a movie' question is shown.
        - If no. EXIT.
        - If yes. User will be shown up until 8 random movies.
          - If user doesnt accept anyone: EXIT.`

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

---

## User avatars

<img src="https://www.gravatar.com/robohash/205e460b479e2e53482ec07740c08d40?f=y&s=400" width="21.5%"><img src="https://www.gravatar.com/robohash/205e460b479e4e53482ec07740c08d40?f=y&s=400" width="21.5%"><img src="https://www.gravatar.com/robohash/205e460b479e2e53482ec77740c08d40?f=y&s=400" width="21.5%"><img src="https://www.gravatar.com/robohash/0?f=y&s=400" width="21.5%">
