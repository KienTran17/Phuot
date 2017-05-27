import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Link, Redirect } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { connect } from 'react-redux';
import getAllPlace from './api/place/getAllPlace';
import Home from './components/site/Home'
import DetailPlace from './components/site/place/DetailPlace'
import Profile from './components/site/user/Profile';
import EditProfile from './components/site/user/EditProfile';
import CreatePlace from './components/site/user/CreatePlace';
const Private = () => <h2>Private page</h2>;
const Public = () => <h2>Public page</h2>;

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

class App extends Component {
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        const { dispatch } = this.props;
        const token = getCookie('tk');
        await getAllPlace().then(lstPlace => {
            dispatch({
                type: "INIT_PLACE",
                item: lstPlace
            })
        });
    }
    render() {
        const token = getCookie('tk');
        return (
            <BrowserRouter basename="/">
                <div>
                    <header>
                        <Header isAuthen={this.props.isAuthen} />
                    </header>

                    <Route exact path="/" render={() => <Home isAuthen={this.props.isAuthen} arrAllPlace={this.props.arrAllPlace} />} />
                    <Route path="/place/:id" component={DetailPlace} />
                    <Route path="/profile" render={() => token ? <Profile /> : <Redirect to="/" />} />
                    <Route path="/createplace" render={() => token ? <CreatePlace /> : <Redirect to="/" />} />
                    <Route path="/editprofile" render={() => token ? <EditProfile /> : <Redirect to="/" />} />
                    <footer>
                        <Footer isAuthen={this.props.isAuthen} />
                    </footer>
                </div>
            </BrowserRouter>
        );
    }
}
export default connect(state => ({ isAuthen: state.isAuthen, arrAllPlace: state.arrAllPlace }))(App)
