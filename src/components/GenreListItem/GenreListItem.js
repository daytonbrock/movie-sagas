import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class GenreListItem extends Component {

    // on click, delete movie / genre relation by id of relation
    handleDelete = () => {
        this.props.dispatch({
            type: 'DELETE_GENRE',
            payload: {
                relation_id: this.props.genre.id,
                movie_id: this.props.movieId
            },
        });
    }

    render() {
        return (
            <div>
                {this.props.genre.name}
                <IconButton aria-label="Delete" onClick={this.handleDelete}>
                    <DeleteIcon/>
                </IconButton>
            </div>
        );
    }
}

export default connect()(GenreListItem);