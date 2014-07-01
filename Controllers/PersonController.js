//Import "Controller" and "Person"
var Controller = require("../Nylex/Controller");
var Person = require("../Models/Person");
//Creating a new Controller
var personController = new Controller();


//Adding get function to a route.
personController.get("/person", function(req, res){
    //Getting all persons from bdd
    Person.find(function (err, persons) {
        //Checking error.
        if (err) res.send(err);
        //Sending a json response with all persons.
        res.json(persons);
    })

});


//Adding post function to a route.
personController.post("/person", function (req, res){

    //Getting the post data
    var name = req.body.name;
    var secondName = req.body.secondName;
    var color = req.body.color;

    //Creating a person with the post data
    var person = new Person();
    person.name = name;
    person.secondName = secondName;
    person.color = color;

    //Saving person and checkig for errors
    person.save(function (err, person) {
        if (err)
            res.send(err);
        //Response with message and the created person.
        res.json({
                message: "Person created!",
                person : person
                });
    });

});


//Always we need export the controller.
module.exports = personController;
