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
                    {this.props.ReduxState.movies.map(movie => {
                        return (
                            <MovieListItem movie={movie} history={this.props.history}/>
                        );
                    })}
            </Grid>
        );
    }
}

const mapReduxStateToProps = ReduxState => ({
    ReduxState
});

export default connect(mapReduxStateToProps)(MovieList);