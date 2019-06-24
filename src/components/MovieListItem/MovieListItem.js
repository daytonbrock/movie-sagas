import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

class MovieListItem extends Component {

    handleClick = () => {
        this.props.dispatch({type: 'FETCH_ONE_MOVIE', payload: this.props.movie.id});
        this.props.history.push('/details/' + this.props.movie.id);
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

export default connect()(MovieListItem);