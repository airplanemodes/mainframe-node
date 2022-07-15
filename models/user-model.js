const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    username: String,
    password: String
})

exports.UserModel = mongoose.model('users', userSchema);

exports.validUser = (content) => {
    let joiSchema = Joi.object({
        username: Joi.string().min(2).max(24).required(),
        password: Joi.string().min(2).max(24).required(),
    })

    return joiSchema.validate(content);
}