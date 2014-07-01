//Import "Controller" and "Person"
var Controller = require("nylex-controller");
var Person = require("../Models/Person");
//Creating a new Controller
var controller = new Controller();


//Adding get function to a route.
controller.get("/", function(req, res){
    //Sending a string
    res.send("Hello world");
});

//Adding post function to a route.
controller.post("/", function (req, res){

    //Getting the post data
    var name = req.body.name;

    //Sending the post data
    if (name != null) {
        res.send("NAME: " + name);
    } else {
        //Throwing custom error for null data
        controller.app.throwError("nullData");
        //we can catch error in ErrorController.
    }

});


//Always we need export the controller.
module.exports = controller;
