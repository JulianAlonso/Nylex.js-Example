
var nylex = require("./Nylex/Nilex");

//Controllers
var indexController = require("./Controllers/IndexController");
var errorController = require("./Controllers/ErrorController");

//Setting static folder.
nylex.static("/public", "./public");

//Mounting a before function, before all request, must be writed before the controllers.
nylex.before("/*", function(req, res, next) {
    console.log("Before function called");
    next();
});

//Mounting a simple controller.
nylex.mount("/", indexController);

//Mounting simple error controller.
nylex.mountError(errorController);

//Starting server
nylex.start(80);
