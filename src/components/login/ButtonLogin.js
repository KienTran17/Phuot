import React, { Component } from 'react';

export default class ButtonLogin extends Component {
    render() {
        return (
            <div className="login_block">
                <a className="btn-login btn color-1 size-2 hover-2" href="#"><i className="fa fa-user"></i>
                    Log in</a>
            </div>
        );
    }
}