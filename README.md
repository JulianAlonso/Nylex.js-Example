Nylex.js-Example
================

Example of project with Nylex.js

## Resful API example with person controller.

  Using Verbs (GET, POST, PUT, DELETE)
  
## Connected to mongodb using mongoose.

## Thrwoing and catching by easy way custom errors!
  
  At index controller: 
    -- Throw the error
    controller.app.throwError("nullData");
  
  At Error Controller:   
    -- Catch the error
    "nullData" : functionToCatchTheError
    
  function functionToCatchTheError(err, req, res, next) {
    res.send(err);
  }
  

