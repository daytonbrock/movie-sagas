import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

class Home extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_MOVIES'});
    }

    render() {
        return (
            <div>
                <Grid container
                    direction="row"
                    justify="space-evenly"
                    alignItems="flex-start">
                        <div>
                            <img src={this.props.ReduxState.movies[0].poster} alt={this.props.ReduxState.movies[0].title}/>
                        </div>
                </Grid>
                <p>display list of movies here</p>
                {JSON.stringify(this.props.ReduxState.movies[0])}
            </div>
        );
    }
}

const mapReduxStateToProps = ReduxState => ({ReduxState});

export default connect(mapReduxStateToProps)(Home);