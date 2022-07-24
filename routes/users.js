var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();

const { userValidation, UserModel } = require('../models/user-model');

router.get('/', async(req, res) => {
    res.json({ msg: 'Users work!' });
});

// Create a new user
router.post('/', async(req, res) => {
    let validBody = userValidation(req.body);
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
});

module.exports = router;
