const mongoose = require('mongoose');
//define a schema /blueprint Note : id is not a part of the schema

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: false },
    username: { type: String, required: true },
    password: { type: String, required: true },
    Role: { type: String, required: true }
});

module.exports = mongoose.model('Users', userSchema, 'Users');