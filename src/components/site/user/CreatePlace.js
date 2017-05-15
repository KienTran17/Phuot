import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreatePlace extends Component {
    render() {
        return (
            <div>ok</div>
        );
    }
}
export default connect(state => ({ isAuthen: state.isAuthen }))(CreatePlace)