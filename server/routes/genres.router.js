// server/routes/genres.router.js
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('genres was hit');
})


module.exports = router;