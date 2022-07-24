const mongoose = require('mongoose');
const Joi = require('joi');

const postSchema = new mongoose.Schema({
    postName: String,
    postText: String,
    postAuthor: String,
    createdAt: {
        type: Date, default: Date.now()
    }
})

exports.PostModel = mongoose.model('posts', postSchema);

exports.validPost = (formdata) => {
    let joiSchema = Joi.object({
        postName: Joi.string().min(2).max(120).required(),
        postText: Joi.string().min(2).max(65536).required(),
    })

    return joiSchema.validate(formdata);
}