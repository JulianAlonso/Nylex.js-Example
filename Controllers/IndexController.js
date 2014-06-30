//Import "Controller"
var Controller = require("../Nylex/Controller");
//Creating a new Controller
var controller = new Controller();


//Adding get function to a route.
controller.get("/", function(req, res){
    //Sending a string
    res.send("Hello world");
});


//Adding post function to a route.
controller.post("/", function (req, res){

    //Post Data
    var name = req.body.name;
    //Sending post data like a string.
    res.send("NAME: " + name);

});


//Always we need export the controller.
module.exports = controller;
