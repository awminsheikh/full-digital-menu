const express = require('express');
const author = require('../module/author');
const router = express.Router();
const Author = require('../module/author')

// All Authors Route
router.get('/', (req, res) => {
    res.render('authors/index');
});








module.exports = router;
