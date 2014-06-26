
var nylex = require("./Nilex");

//Controllers
var indexController = require("./Controllers/IndexController");


nylex.mount("/", indexController);


nylex.start(80);
