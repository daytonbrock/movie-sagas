// // src/redux/reducers/oneMovie.reducer.js

const initialMovie = {
    "id": 0,
    "title": "",
    "poster": "",
    "description": ""
}

// Used to store one movie at a time for details page
const oneMovie = (state = [initialMovie], action) => {
    switch (action.type) {
        case 'SET_ONE_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

export default oneMovie;