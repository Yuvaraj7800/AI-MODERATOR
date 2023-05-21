const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    text : String,
    toxicity: Array,
    user: {type : Types.ObjectId, ref : 'users'},
    createdAt : Date
});

module.exports = model( 'analysis', myschema );