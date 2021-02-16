// import orm.js
// call code from ORM functions
// export at end of file

const orm = require("../config/orm");

orm.selectAll("burgers");
orm.insertOne("burgers", "burger_name", "Double Cheese");
orm.updateOne("burgers", "Butter Burger");