const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const moviesRouter = require('./routes/movies.router');
const genresRouter = require('./routes/genres.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));
app.use(bodyParser.urlencoded({extended: true}));

/** ---------- ROUTES ---------- **/
app.use('/api/movies', moviesRouter);
app.use('/api/genres', genresRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});