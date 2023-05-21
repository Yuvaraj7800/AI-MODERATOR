const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    comment : String,
    name: String,
    reply: [{type : String, ref : 'comment'}],
    upvotes: {type: Number, default: 0},
    createdAt : Date
});

module.exports = model( 'comment', myschema );