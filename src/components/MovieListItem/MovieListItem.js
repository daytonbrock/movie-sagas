import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

class MovieListItem extends Component {
    
    render() {
        return (
            <Grid item xs={2}>
                <img src={this.props.movie.poster} alt={this.props.movie.title}/>
            </Grid>
        );
    }
}

const mapReduxStateToProps = ReduxState => ({
    ReduxState
});

export default connect(mapReduxStateToProps)(MovieListItem);