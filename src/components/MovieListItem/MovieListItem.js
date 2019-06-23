import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

class MovieListItem extends Component {

    handleClick = () => {
        this.props.history.push('/details');
    }
    
    render() {
        return (
            <Grid item xs={2}>
                <img src={this.props.movie.poster} 
                    alt={this.props.movie.title} 
                    onClick={this.handleClick}/>
            </Grid>
        );
    }
}

const mapReduxStateToProps = ReduxState => ({
    ReduxState
});

export default connect(mapReduxStateToProps)(MovieListItem);