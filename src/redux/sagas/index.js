// src/redux/sagas/index.js
// is responsible for loading all sagas, and merging them together
import { all } from 'redux-saga/effects';
// import saga files

// Create the rootSaga generator function
// this will be imported into index.js for the app
function* rootSaga() {
    // yield all([
    // list imported saga files here
    // ])
}

export default rootSaga;