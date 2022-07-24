const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    admin: Boolean,
    posts: Array
})

exports.UserModel = mongoose.model('users', userSchema);



exports.userValidation = (formdata) => {
    let joiSchema = Joi.object({
        username: Joi.string().min(2).max(24).required(),
        password: Joi.string().min(2).max(24).required(),
        email: Joi.string().min(2).max(64).email().required(),
        admin: Joi.boolean().required()
    });

    return joiSchema.validate(formdata);
}

exports.loginValidation = (formdata) => {
    let joiSchema = Joi.object({
        username: Joi.string().min(2).max(24).required(),
        password: Joi.string().min(2).max(24).required()
    });

    return joiSchema.validate(formdata);
}