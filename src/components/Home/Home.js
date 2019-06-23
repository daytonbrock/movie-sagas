import React, { Component } from 'react';
import './Home.css';
import { connect } from 'react-redux';
import MovieList from '../MovieList/MovieList';

class Home extends Component {
    
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_MOVIES'});
    }

    render() {
        return (
            <div className="App">
                <MovieList history={this.props.history}/>
            </div>
        );
    }
}

const mapReduxStateToProps = ReduxState => ({ReduxState});

export default connect(mapReduxStateToProps)(Home);