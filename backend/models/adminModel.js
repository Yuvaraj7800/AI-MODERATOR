const {Schema, model} = require('../connection');

const myschema = new Schema({
    name : 'yuvaraj',
    email : 'yuvi123@mail.com',
    password : 'yuvi@7800',

});

module.exports = model( 'admin', myschema );