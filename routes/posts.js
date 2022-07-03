var express = require('express');
var router = express.Router();

router.get('/', async(req, res) => {
  res.json({msg:'Posts work!'});
});

module.exports = router;
