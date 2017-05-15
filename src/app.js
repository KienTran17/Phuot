import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Link, Redirect } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { connect } from 'react-redux';
import getAllPlace from './api/place/getAllPlace';
import Home from './components/site/Home'
import DetailPlace from './components/site/place/DetailPlace'
import Profile from './components/site/user/Profile';
const Private = () => <h2>Private page</h2>;
const Public = () => <h2>Public page</h2>;

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        console.log( this.props.isAuthen)
        return (
            <BrowserRouter basename="/">
                <div>
                    <header>
                        <Header />
                    </header>

                    <Route exact path="/" component={Home} />
                    <Route path="/place/:id" component={DetailPlace} />
                    <Route path="/profile" render={() => <Profile />} />
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </BrowserRouter>
        );
    }
}
export default connect(state => ({ isAuthen: state.isAuthen, arrAllPlace: state.arrAllPlace }))(App)
