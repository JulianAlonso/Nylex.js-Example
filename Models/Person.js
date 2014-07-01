var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = new Schema({

    name : String,
    color : String,
    secondName : String

});

module.exports = mongoose.model('Person', PersonSchema);
