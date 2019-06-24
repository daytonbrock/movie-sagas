// src/redux/sagas/index.js
// is responsible for loading all sagas, and merging them together
import { all } from 'redux-saga/effects';
import movieSagas from './movies.saga';
import genreSagas from './genres.saga';

// Create the rootSaga generator function
// this will be imported into index.js for the app
function* rootSaga() {
    yield all([
        movieSagas(),
        genreSagas(),
    ])
}

export default rootSaga;