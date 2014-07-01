var nylex = require("nylex");
var mongoose = require("mongoose");

//Connecting mongoose
mongoose.connect("mongodb://localhost/example", function (err, res) {
    if (err)
        console.log("Error connecting to database: \n" + err);
    else
        console.log("Connected to database!");
});

//Controllers
var indexController = require("./Controllers/IndexController");
var personController = require("./Controllers/PersonController");
var errorController = require("./Controllers/ErrorController");

//Setting static folder.
nylex.static("/public", "./public");

//Mounting a before function, before all request, must be writed before the controllers.
nylex.before("/*", function(req, res, next) {

    //Do logging...
    console.log("Before function called");
    next();
});

//Mounting controllers.
nylex.mount("/", indexController);
nylex.mount("/API", personController);

//Mounting simple error controller.
nylex.mountError(errorController);

//Starting server
nylex.start(80);
