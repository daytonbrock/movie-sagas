import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import SvgIcon from '@material-ui/core/SvgIcon';

class Details extends Component {

    componentDidMount() {
        const movieId = this.props.match.params.movieId;
        this.props.dispatch({
            type: 'FETCH_ONE_MOVIE', 
            payload: movieId,
        });
        this.props.dispatch({
            type: 'FETCH_ONE_MOVIE_GENRES',
            payload: movieId,
        });
    }

    render() {
        return (
            <div className="App">
                <Grid container
                    justify='center'
                    alignContent='center'>
                    <Grid item xs={3}>
                        <Button onClick={() => this.props.history.push('/')}>
                            Back to List
                        </Button>
                        <Button onClick={() => this.props.history.push(`/edit/${this.props.match.params.movieId}`)}>
                            Edit
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <h3>{this.props.reduxState.oneMovie.title}</h3>
                    </Grid>
                    <Grid item xs={3}>
                        <h4>Genres:</h4>
                    </Grid>
                </Grid>
                <Grid container>
                        <Grid item xs={3}>
                            <img src={this.props.reduxState.oneMovie.poster} 
                                alt={this.props.reduxState.oneMovie.title}/>
                        </Grid>
                        <Grid item xs={6}>
                            <p>{this.props.reduxState.oneMovie.description}</p>
                        </Grid>
                        <Grid item xs={3}>
                            {this.props.reduxState.oneMovieGenres.map(genre => <div key={genre.id}>{genre.name}</div>)}
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