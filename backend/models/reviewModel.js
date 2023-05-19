const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    text : String,
    rating: Number,
    createdAt : Date
});

module.exports = model( 'review', myschema );