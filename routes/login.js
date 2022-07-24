var express = require('express');
var router = express.Router();

const bcrypt = require('bcrypt');
const { loginValidation, UserModel } = require('../models/user-model');

router.post('/', async(req,res) => {
    let requestValidation = loginValidation(req.body);
    if (requestValidation.error) {
        return res.status(400).json(requestValidation.error.details);
    }

    try {
        let user = await UserModel.findOne({ username:req.body.username });
        if (!user) {
            return res.status(401).json('Username not found.');
        }

        let passwordValidation = await bcrypt.compare(req.body.password, user.password);
        if (!passwordValidation) {
            return res.status(401).json('Incorrect password. Access not granted.');
        }

        let new_token = makeToken(user._id);
        res.json({ token: new_token });

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});

module.exports = router;