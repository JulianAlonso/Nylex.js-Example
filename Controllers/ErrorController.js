//Create a new array with the errors and the functions
var errorController = {

    "404" : notFound,

    "303" : anotherError,

    "nullData" : nullDataError,
}

//Mapping 404 error, we only need function with req and res
function notFound(req, res) {

    //Sending a static html page.
    res.sendfile("./public/ErrorPages/Error404.html");
    //res.send("HE");

}

//Mapping all errors we need a function with err, res, res and next
function anotherError(err, req, res, next) {

    res.send("Error: %s", err.code);

}

//Mapping custom error throwed by IndexController:
function nullDataError(err, req, res, next) {

    res.json({ message: "Null data error"});

}

module.exports = errorController;
