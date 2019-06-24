// server/routes/movies.router.js
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET all movies from database
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "movies" ORDER BY "id" ASC;';
    pool.query(queryText)
    .then(response => {
        console.log(response);
        res.send(response.rows);
    }).catch(error => {
        console.log('error with SELECT on /api/movies route:', error);
        res.sendStatus(500);
    }); // end pool query
}); // end get

// GET one movie to view in details page
router.get('/details/:id', (req, res) => {
    const queryText = 'SELECT * FROM "movies" WHERE "id"=$1;';
    pool.query(queryText, [req.params.id])
    .then(response => {
        console.log(response);
        res.send(response.rows);
    }).catch(error => {
        console.log('error with SELECT on /api/movies/details route:', error);
        res.sendStatus(500);
    }); // end pool query
}); // end get

// PUT to update title / description of movie by ID
router.put('/', (req, res) => {
    const queryText = `UPDATE "movies"
                    SET "title"=$1, "description"=$2
                    WHERE "id"=$3;`;
    pool.query(queryText, [req.body.title, req.body.description, req.body.id])
    .then(() => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error with UPDATE on /api/movies/ route:', error);
        res.sendStatus(500);
    }); // end pool query
}); // end put


module.exports = router;