var express = require('express');
var router = express.Router();

router.get('/', async(req, res) => {
  res.json({msg:'Users work!'});
});

module.exports = router;
