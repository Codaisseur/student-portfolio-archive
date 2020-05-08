# 🎨 Art Dealer - Backend 🎨
### ☑️ Version 1.0
Server for **Art Dealer** app: https://github.com/Sofialav/artDealer-client   
You can find deployed server on [**Heroku**](https://fast-dawn-59540.herokuapp.com)

## Technologies used
- **Node.js**
- Database - **PostrgreSQL**
- ORM - [**Sequelize**](https://github.com/Sofialav/artDealer-server/blob/master/artwork/model.js)
- Framework - [**Express**](https://github.com/Sofialav/artDealer-server/blob/master/index.js)
    - [**REST API**](https://github.com/Sofialav/artDealer-server/blob/master/artist/router.js)
- [**bcrypt**](https://github.com/Sofialav/artDealer-server/blob/master/authorization/router.js)
- [**jsonwebtoken**](https://github.com/Sofialav/artDealer-server/blob/master/authorization/jwt.js)

## Database Model
![Database](https://res.cloudinary.com/d2eath4e/image/upload/v1585833998/personal/Screenshot_from_2020-04-02_15-15-37_qpnn09.png)

## Setting up (local)
- Download repo
- Install dependencies with `npm install`
- Update **dbUrl** in **/db.js** with your local database credentials:
```JavaScript
const dbUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:artd@localhost:5432/postgres"; // CHANGE THIS LINE
``` 
- Run with `node index.js`
- After database creation update it with `node seeds.js`
