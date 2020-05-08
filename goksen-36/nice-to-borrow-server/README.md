# NICE TO BORROW - SERVER

A web app for users to search, borrow, and share books locally.

Built with Node with Express for RestAPIs in the backend, and PostgreSQL with Sequelize and PostGIS for storing location-based user data.

## Table of contents:

- **[Data Model](#data-model)**
- **[Endpoints](#endpoints)**
- **[Client side repo](#client-side-repo)**


## Data Model

![](https://github.com/GoksenCodes/nice-to-borrow-client/blob/development/src/Images/datamodel/data-model-schema.png)


## Endpoints

* [users authentcation&authorization](https://github.com/GoksenCodes/nice-to-borrow-server/blob/development/routers/auth.js)
* [books](https://github.com/GoksenCodes/nice-to-borrow-server/blob/development/routers/book.js)
* [borrowedItems](https://github.com/GoksenCodes/nice-to-borrow-server/blob/development/routers/borroweditem.js)

| Method | Path                       | Purpose                             | required parameters                   | auth |
| ------ | -------------------------- | ----------------------------------- | ---------------------                 | ---- |
| POST   | '/signup'                  | Create a new user and get a token   | email, name, password                 | no   |
| POST   | '/login'                   | Get a token with email & password   | email, password                       | no   |
| GET    | '/me'                      | Get information of this user        | none                                  | yes  |
| GET    | '/books'                   | Get books match with the search     | title, language, distance             | no   |
| GET    | '/books/:id                | Get book by id                      | bookId                                | no   |
| PACTH  | '/books/:id                | Update requested book's availability| bookId                                | yes  | 
| POST   | '/borroweditems            | Keep track of borowwed books        | bookId, startDate,endDate,userId      | yes  |
| POST   | '/books'                   | Add books to the database           | title, language, author, imageUrl     | yes  |                                                                                 description, imageUrl,
                                                                              borrowingPeriod, description                


## Client side repo

The client side of this project is built with React and Redux and styled with CSS3 and Bootsrap.

[Click here](https://github.com/GoksenCodes/nice-to-borrow-client) to view client side repo
