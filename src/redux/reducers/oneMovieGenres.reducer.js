// // src/redux/reducers/oneMovieGenres.reducer.js

// Used to store one movie at a time for details page
const oneMovieGenres = (state = [], action) => {
    switch (action.type) {
        case 'SET_ONE_MOVIE_GENRES':
            return action.payload;
        default:
            return state;
    }
}

export default oneMovieGenres;