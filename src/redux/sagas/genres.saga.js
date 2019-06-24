// // src/redux/sagas/genres.saga.js
import { call, put as dispatch, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// fetch all genres from server
function* fetchGenres() {
    try {
        // axios GET request
        const genresResponse = yield call(axios.get, '/api/genres');
        // send response to Redux store
        yield dispatch({
            type: 'SET_GENRES',
            payload: genresResponse.data
        });
    } catch (error) {
        console.log(error);
    }
}

// fetch genres for one movie from server
function* fetchOneMovieGenres(action) {
    try {
        // axios GET request
        const genresResponse = yield call(axios.get, `/api/genres/${action.payload}`);
        // send response to Redux store
        yield dispatch({
            type: 'SET_ONE_MOVIE_GENRES',
            payload: genresResponse.data
        });
    } catch (error) {
        console.log(error);
    }
}

// post new movie / genre relation to server
function* postNewGenreRelation(action) {
    try {
        // axios POST request
        yield call(axios.post, '/api/genres', action.payload);
        // fetch updated genres for one movie
        yield dispatch({
            type: 'FETCH_ONE_MOVIE_GENRES',
            payload: action.payload.movie_id
        });
    } catch (error) {
        console.log(error);
    }
}

// watches for actions
function* watcherSaga() {
    yield takeEvery('FETCH_ONE_MOVIE_GENRES', fetchOneMovieGenres);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('ADD_GENRE', postNewGenreRelation);
}

export default watcherSaga;