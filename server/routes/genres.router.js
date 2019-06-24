// server/routes/genres.router.js
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
    const queryText = `SELECT "genres"."name", "genres"."id" FROM "movies"
                        JOIN "movie_genre" ON "movie_id"="movies"."id"
                        JOIN "genres" ON "genre_id"="genres"."id"
                        WHERE "movie_id"=$1;`
    pool.query(queryText, [req.params.id])
    .then(response => {
        console.log(response);
        res.send(response.rows);
    }).catch(error => {
        console.log('error with SELECT on /api/genres/ route:', error);
        res.sendStatus(500);
    }); // end pool query
}); // end get


module.exports = router;