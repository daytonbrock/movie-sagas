import React, { Component } from 'react';
import { connect } from 'react-redux';
import GenreListItem from '../GenreListItem/GenreListItem';

class GenreList extends Component {
    render() {
        return (
            <>
                <h4>Genres:</h4>
                {this.props.reduxState.oneMovieGenres.map(genre => <GenreListItem key={genre.id} genre={genre} movieId={this.props.movieId}/>)}
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({reduxState});

export default connect(mapReduxStateToProps)(GenreList);