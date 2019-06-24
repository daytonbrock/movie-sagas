import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import MovieListItem from '../MovieListItem/MovieListItem';

class MovieList extends Component {
    render() {
        return (
            <Grid container
                direction="row"
                justify="space-evenly"
                alignItems="flex-start">
                    {this.props.reduxState.movies.map(movie => {
                        return (
                            <MovieListItem key={movie.id} movie={movie} history={this.props.history}/>
                        );
                    })}
            </Grid>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieList);