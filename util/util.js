var util = require('util');

var obj = {
    a: 5,
    b: 6,
    inspect: function () {
        return 123;
    }
};

obj.self = obj;

console.log(util.inspect(obj));


var str = util.format("My %s %d %j", "string", 123, {test:"obj"});
console.log(str);

//inheritance
//parent
function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function () {
    console.log(this.name + " walks!");
};

//child
function Rabbit(name){
    this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function () {
    console.log(this.name + " jumps!");
};

var rabbit = new Rabbit("My Rabbit");
rabbit.walk();
rabbit.jump();