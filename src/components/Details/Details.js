import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

class Details extends Component {

    componentDidMount() {
        const movieId = this.props.match.params.movieId;
        this.props.dispatch({
            type: 'FETCH_ONE_MOVIE', 
            payload: movieId,
        });
    }

    render() {
        return (
            <div className="App">
                <Grid container
                    justify='center'
                    alignContent='center'>
                    <h3>{this.props.reduxState.oneMovie.title}</h3>
                </Grid>
                <Grid container>
                        <Grid item xs={3}>
                            <img src={this.props.reduxState.oneMovie.poster} 
                                alt={this.props.reduxState.oneMovie.title}/>
                        </Grid>
                        <Grid item xs={8}>
                            <p>{this.props.reduxState.oneMovie.description}</p>
                        </Grid>
                </Grid>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(Details);