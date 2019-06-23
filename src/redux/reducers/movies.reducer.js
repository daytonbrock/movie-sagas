// // src/redux/reducers/movies.reducer.js

const initialMovie = {
        "id": 0,
        "title": "",
        "poster": "",
        "description": ""
    }

// Used to store movies returned from the server
const movies = (state = [initialMovie], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

export default movies;