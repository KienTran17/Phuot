import React, { Component } from 'react';
import { connect } from 'react-redux';
import getUserByUserName from '../../api/user/getUserByUserName'
import logout from '../../api/user/logout'
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

class Author extends Component {
    constructor(props) {
        super(props);
        this.state = { user: {} };
    }
    async componentDidMount() {
        const token = getCookie('tk');
        if (token) {
            await getUserByUserName(token).then(user => {
                this.setState({ user })
            });
        }
    }
    logout() {
        const {dispatch} = this.props;
        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                // the user is logged in and has authenticated your
                // app, and response.authResponse supplies
                // the user's ID, a valid access token, a signed
                // request, and the time the access token 
                // and signed request each expire
                //alert('connected');
                //alert(accessToken);
                //console.log('ID'+uid);
                //console.log('token: '+accessToken);
                FB.logout(function (response) {
                    logout().then(r=> {
                        if(r) dispatch({type:"LOGIN"})
                    })

                    //alert('connected');
                });

            } else if (response.status === 'not_authorized') {
                // the user is logged in to Facebook, 
                // but has not authenticated your app

            } else {
                // the user isn't logged in to Facebook.
                logout().then(r=> {
                        if(r) dispatch({type:"LOGIN"})
                    })
                //console.log('response status not logged in');
            }

        });
    }
    render() {
        const user = this.state.user;
        return (
            <div className="be-drop-down login-user-down dropdown">
                <span className="be-dropdown-content dropdown-toggle" data-toggle="dropdown">
                    <img className="login-user" src={user.avatar ? user.avatar : "../asset/img/login.jpg"} alt /><span id="username"> {user.last_name ? ' ' + user.last_name + ' ' + user.first_name : " "}</span>
                </span>
                <ul style={{ fontSize: "9pt", backgroundColor: "#adbeff", color: "black", fontWeight: "bold" }} className="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><span className="glyphicon glyphicon-stats pull-right" />Tạo nhóm phượt </a></li>
                    <li className="divider" />
                    <li><a href="./createplace"><span className="glyphicon pull-right">  </span>Tạo địa điểm </a></li>
                    <li className="divider" />
                    <li><a href="#"><span className="glyphicon glyphicon-heart pull-right" />Chia sẽ hành trình </a></li>
                    <li className="divider" />
                    <li><a href="./profile"><span className="glyphicon glyphicon-cog pull-right" />Trang cá nhân </a></li>
                    <li className="divider" />
                    <li><a onClick={this.logout.bind(this)}><span className="glyphicon glyphicon-log-out pull-right" />Đăng xuất </a></li>
                </ul>
            </div>

        );
    }
}

export default connect(state => ({ isAuthen: state.isAuthen, user: state.user }))(Author)
