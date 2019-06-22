import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    render() {
        return (
            <div>
                <p>display details for one movie here</p>
            </div>
        );
    }
}

export default connect()(Details);