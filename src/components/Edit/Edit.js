import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddGenre from '../AddGenre/AddGenre';
import GenreList from '../GenreList/GenreList';

class Edit extends Component {

    state = {
        title: null,
        description: null,
    }

    // will fetch movie and genre relations on load
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

    // called to update movie by id on "save" click
    updateMovie = () => {
        // get title and description
        let title = this.state.title;
        let description = this.state.description
        // if null, set to original value
        if (title === null) {
            title = this.props.reduxState.oneMovie.title;
        }
        if (description === null) {
            description = this.props.reduxState.oneMovie.description;
        }
        // update movie with new title/description or preserved title/description
        this.dispatchUpdate( title, description );
        // navigate to details 
        this.props.history.push(`/details/${this.props.match.params.movieId}`)
    }

    // called on update
    dispatchUpdate = ( title, description ) => {
        this.props.dispatch({
            type: 'UPDATE_MOVIE',
            payload: {
                title: title,
                description: description,
                id: this.props.match.params.movieId
            }
        });
    }

    // handle change on text fields
    handleChangeFor = (propertyName) => (event) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value,
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
                            onChange={this.handleChangeFor('title')}
                            fullWidth margin="normal"
                            multiline rowsMax="20"
                            label="Title"
                            defaultValue={this.props.reduxState.oneMovie.title}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <AddGenre movieId={this.props.match.params.movieId}/>
                    </Grid>
                </Grid>
                <Grid container>
                        <Grid item xs={3}>
                            <img src={this.props.reduxState.oneMovie.poster} 
                                alt={this.props.reduxState.oneMovie.title}/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                onChange={this.handleChangeFor('description')}
                                fullWidth margin="normal"
                                multiline rowsMax="20"
                                label="Description"
                                defaultValue={this.props.reduxState.oneMovie.description}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <GenreList movieId={this.props.match.params.movieId}/>
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