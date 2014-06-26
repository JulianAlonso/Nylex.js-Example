var Controller = require("../Controller");
var controller = new Controller();

controller.get("/", function(req, res){
        console.log("HEEE");
        res.send("Hello world");
});

controller.post("/", function (req, res){

    console.log(req.body.name);

    res.send("NAME: " + req.body.name);

});



module.exports = controller;
