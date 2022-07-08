var express = require('express');
var router = express.Router();

const { validUser, UserModel } = require('../models/user-model');

router.get('/', async(req, res) => {
  res.json({msg:'Users work!'});
});

module.exports = router;
