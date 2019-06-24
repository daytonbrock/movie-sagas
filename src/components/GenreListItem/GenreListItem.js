import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class GenreListItem extends Component {



    render() {
        return (
            <div>
                {this.props.genre.name}
                <IconButton aria-label="Delete">
                    <DeleteIcon />
                </IconButton>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({reduxState});

export default connect(mapReduxStateToProps)(GenreListItem);