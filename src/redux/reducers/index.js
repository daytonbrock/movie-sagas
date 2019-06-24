// src/redux/reducers/reducers.js
import { combineReducers } from 'redux';
import movies from './movies.reducer';
import genres from './genres.reducer';
import oneMovie from './oneMovie.reducer';
import oneMovieGenres from './oneMovieGenres.reducer';

const rootReducer = combineReducers({
    movies,
    genres,
    oneMovie,
    oneMovieGenres,
});

export default rootReducer;

