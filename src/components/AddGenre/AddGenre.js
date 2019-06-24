import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

class AddGenre extends Component {

    state = {
        name: '',
        genre_id: '',
    }

    // on click add movie / genre relation
    addGenre = () => {
        if(this.state.genre_id === ''){
            alert('please select a genre to add.')
        } else {
           this.props.dispatch({
                type: 'ADD_GENRE',
                payload: {
                    movie_id: this.props.movieId,
                    genre_id: this.state.genre_id,
                }
            }); 
        } 
    }

    // handle change on select
    handleChange = (event, props) => {
        this.setState({
            name: event.target.value,
            genre_id: props.key,
        })
    }

    // fetch genre list on load
    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_GENRES'
        });
    }

    render() {
        return (
            <div>
                <Select value={this.state.name} onChange={this.handleChange}>
                    {this.props.reduxState.genres.map( genre => {
                        return (
                            <MenuItem key={genre.id} id={genre.id} value={genre.name}>{genre.name}</MenuItem>
                        );
                    })}
                </Select>
                <Button onClick={this.addGenre}>Add Genre</Button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({reduxState});

export default connect(mapReduxStateToProps)(AddGenre);