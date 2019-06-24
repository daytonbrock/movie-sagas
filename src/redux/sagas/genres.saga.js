// // src/redux/sagas/genres.saga.js
import { call, put as dispatch, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

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

// watches for actions
function* watcherSaga() {
    yield takeEvery('FETCH_ONE_MOVIE_GENRES', fetchOneMovieGenres);
}

export default watcherSaga;