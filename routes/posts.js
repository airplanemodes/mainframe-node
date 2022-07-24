var express = require('express');
var router = express.Router();

const { validPost, PostModel } = require('../models/post-model')



router.get('/', async(req, res) => {
    try {
      let data = await PostModel.find({});
      res.json(data);

    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
});

router.post('/', async(req,res) => {
    let validBody = validPost(req.body);
    if (validBody.error) {
        return res.status(400).json(validBody.error.details);
    }

    try {
        let post = new PostModel(req.body);
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;
