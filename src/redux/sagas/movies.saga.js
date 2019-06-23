// // src/redux/sagas/movies.saga.js
import { call, put as dispatch, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchMovies() {
    try {
        // axios GET request
        const moviesResponse = yield call(axios.get, '/api/movies');
        // send response to Redux store
        yield dispatch({type: 'SET_MOVIES', payload: moviesResponse.data});
    } catch (error) {
        console.log(error);
    }
}

// watches for actions
function* watcherSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
}

export default watcherSaga;