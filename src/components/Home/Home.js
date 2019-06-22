import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div>
                <p>display list of movies here</p>
            </div>
        );
    }
}

export default connect()(Home);