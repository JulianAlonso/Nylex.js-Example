//Import "Controller" and "Person"
var Controller = require("nylex-controller");
var Person = require("../Models/Person");
//Creating a new Controller
var personController = new Controller();

//Very easy and restfull routing:
personController.get("/person", getAllPersons);
personController.post("/person", addPerson);
personController.get("/person/:person_id", getPersonById);
personController.put("/person/:person_id", updatePersonById);
personController.delete("/person/:person_id", deletePersonById);

//Get - Get all persons
function getAllPersons(req, res){
    //Getting all persons from bdd
    Person.find(function (err, persons) {
        //Checking error.
        if (err) res.send(err);
        //Sending a json response with all persons.
        res.json(persons);
    })

}


//Post to add a person
function addPerson(req, res){

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

}

//Get function for a simple person with id.
function getPersonById(req, res) {
    //Getting person by id
    Person.findById(req.params.person_id, function (err, person) {
        //Check error
        if (err) res.send(err);

        //Send json person
        res.json(person);

    })
};

//Updating a person
function updatePersonById(req, res) {

    Person.findById(req.params.person_id, function(err, person) {

        if (err) res.send(err);

        person.name = req.body.name; //Update person name.

        //Saving the person
        person.save(function (err, person) {

            if (err) res.send(err);

            res.json({
                    message : "Person updated!",
                    person : person
                    })
        })
    })

};

//Deleting a person by id
function deletePersonById(req, res) {
    Person.remove({
        _id : req.params.person_id
    }, function (err) {

        if (err) res.send(err);

        res.json({
                message : "Deleted person!"
                })

    })
}


//Always we need export the controller.
module.exports = personController;
