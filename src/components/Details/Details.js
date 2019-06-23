import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    render() {
        return (
            <div>
                <p>display details for one movie here</p>
                <pre>
                    {JSON.stringify(this.props.reduxState.oneMovie, null, 2)}
                </pre>
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Details);