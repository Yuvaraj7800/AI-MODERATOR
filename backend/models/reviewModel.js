const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    name : String,
    rating: String,
    review: String,
    createdAt : Date
});

module.exports = model( 'review', myschema );