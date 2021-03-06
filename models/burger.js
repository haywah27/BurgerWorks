const orm = require("../config/orm");

// will call orm functions using different burger info for variables
const burg = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        })
    },
    insertOne: function (newBurg, cb) {
        orm.insertOne(newBurg, function (res) {
            cb(res);
        })
    },
    updateOne: function (updateBurg, cb) {
        orm.updateOne(updateBurg, function (res) {
            console.log("in update funct- button clicked:", updateBurg)
            cb(res);
        })
    },
}

module.exports = burg;