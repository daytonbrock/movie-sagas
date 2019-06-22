import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    render() {
        return (
            <div>
                <p>display edit page for one movie here</p>
            </div>
        );
    }
}

export default connect()(Edit);