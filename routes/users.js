var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();

const { validUser, UserModel } = require('../models/user-model');

router.get('/', async(req, res) => {
    res.json({ msg:'Users work!' });
});

router.post('/', async(req, res) => {
    let validBody = validUser(req.body);
    if (validBody.error) {
        return res.status(400).json(validBody.error.details);
    }

    try {
        let user = new UserModel(req.body);
        user.password = await bcrypt.hash(user.password, 10);
        await user.save();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
