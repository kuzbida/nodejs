var log = require('./logger')(module);
var User = require('./user');

function run(){
    var John = new User('John');
    var David = new User('David');

    John.hello(David);
    log('Run successful');
}

if(module.parent){
    exports.run = run;
} else {
    run();
}
