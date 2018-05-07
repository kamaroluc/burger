var orm = require("../config/orm.js");

//burger object we are using in burger_controller file in order to perform different operarions while hitting different routes.
var burger = {
 all: function(cb) {
   orm.all("burgers", function(res) { //passing parameter values for orm.js file all,create and update methods.
     cb(res);
   });
 },
 create: function(name, cb) {
   orm.create("burgers", [
     "burger_name", "devoured"
   ], [
     name, false
   ], cb);
 },
 update: function(id, cb) {
   var condition = "id=" + id;
   orm.update("burgers", {
     devoured: true
   }, condition, cb);
 }
};

module.exports = burger;
