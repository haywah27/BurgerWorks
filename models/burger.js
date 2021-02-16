// import orm.js
// call code from ORM functions
// export at end of file

const orm = require("../config/orm");

const burger = {
    selectAll: function (table, cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        })
    },
    insertOne: function (table, columnName, newBurg, cb) {
        orm.insertOne("burgers", "burger_name", "Double Cheese", function (res) {
            cb(res);
        })
    },
    updateOne: function (table, updateBurg, cb) {
        orm.updateOne("burgers", "Butter Burger", function (res) {
            cb(res);
        })
    },

}
orm.insertOne("burgers", "burger_name", "Double Cheese");
orm.updateOne("burgers", "Butter Burger");
}

module.exports = burger;