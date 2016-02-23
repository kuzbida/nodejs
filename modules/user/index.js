var log = require('../logger')(module);
var db = require('db');
db.connect();

function User(name){
    this.name = name;
}

User.prototype.hello = function (who) {
    log(db.getPhrase('hello') + ', '+ who.name)
};

module.exports = User;