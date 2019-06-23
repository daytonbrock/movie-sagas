// server/routes/movies.router.js
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET all movies from database
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "movies";'
    pool.query(queryText)
    .then(response => {
        console.log(response);
        res.send(response.rows);
    }).catch(error => {
        console.log('error with SELECT on /api/movies route:', error);
        res.sendStatus(500);
    }); // end pool query
}); // end get


module.exports = router;