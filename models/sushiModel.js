var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sushiSchema = new Schema({
    name: String ,
    price: String ,
    pcs:Number ,
    photos: [],
    partCreated: { type: Date, default: Date.now },
    partUpdated: { type: Date, default: Date.now }

});

var Sushi = mongoose.model("Sushi", sushiSchema);
module.exports = Sushi;
