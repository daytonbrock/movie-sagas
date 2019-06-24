import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Edit extends Component {

    state = {
        title: '',
        description: '',
    }

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

    updateMovie = () => {
        console.log('save changes');
        this.props.dispatch({
            type: 'UPDATE_MOVIE',
            payload: {
                title: this.state.title,
                description: this.state.description,
                id: this.props.match.params.movieId
            }
        });
    }

    render() {
        return (
            <div className="App">
                <Grid container
                    justify='center'
                    alignContent='center'>
                    <Grid item xs={3}>
                        <Button onClick={() => this.props.history.push(`/details/${this.props.match.params.movieId}`)}>
                            Cancel
                        </Button>
                        <Button onClick={this.updateMovie}>
                            Save
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth margin="normal"
                            multiline rowsMax="20"
                            label="Title"
                            defaultValue={this.props.reduxState.oneMovie.title}
                            variant="outlined"
                        />
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
                            <TextField
                                fullWidth margin="normal"
                                multiline rowsMax="20"
                                label="Description"
                                defaultValue={this.props.reduxState.oneMovie.description}
                                variant="outlined"
                            />
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

export default connect(mapReduxStateToProps)(Edit);