import React, { Component } from 'react';
import Login from '../login/ButtonLogin';
import { connect } from 'react-redux';
import checkLogin from '../../api/checkLogin';

function getCookie(name) {
	var value = "; " + document.cookie;
	var parts = value.split("; " + name + "=");
	if (parts.length == 2) return parts.pop().split(";").shift();
}

class Header extends Component {
	componentDidMount() {
		const { isAuthen, dispatch } = this.props;
		checkLogin(getCookie('tk')).then(r => {
			if (r) {
				if (!isAuthen)
					dispatch({type: 'LOGIN'});
					
			}
		});
	}
	render() {
		const { isAuthen } = this.props;
		const show = isAuthen ? <h1>Da Dang Nhap </h1> : <Login />;
		return (
			<div className="container-fluid custom-container">
				<div className="row no_row row-header">
					<div className="brand-be">
						<a href="index.html"><img src="../asset/img/logo.png" alt="logo" className="be_logo" />
						</a>
					</div>
					<div className="header-menu-block">
						<button className="cmn-toggle-switch cmn-toggle-switch__htx"><span></span></button>
						<ul className="header-menu" id="one">
							<li className="active-header"><a href="blog-detail-2.html">Find Projects</a><i className="fa fa-angle-down"></i>
								<ul>
									<li>
										<a href="activity.html">ACTIVITY</a>
										<i className="fa fa-angle-right"></i><i className="fa fa-angle-down"></i>
										<ul>
											<li><a href="page1.html">PAGE 1</a></li>
											<li><a href="page2.html">PAGE 2</a></li>
											<li><a href="page3.html">PAGE 3</a></li>
										</ul>
									</li>
									<li><a href="search.html">SEARCH</a></li>
								</ul>
							</li>
							<li><a href="activity.html">Jobs</a></li>
							<li><a href="search.html">Find Candidates</a><i className="fa fa-angle-down"></i>
								<ul>
									<li><a href="author-edit.html">AUTHOR EDIT</a></li>
									<li><a href="author-login.html">AUTHOR LOGIN</a></li>
									<li><a href="messages.html">MESSAGES</a></li>
									<li><a href="messages-2.html">MESSAGES 2</a></li>
								</ul>
							</li>
							<li><a href="blog-detail-2.html">Community</a><i className="fa fa-angle-down"></i>
								<ul>
									<li><a href="blog.html">BLOG</a></li>
									<li><a href="blog-2.html">BLOG 2</a></li>
									<li><a href="blog-3.html">BLOG 3</a></li>
									<li><a href="statictics.html">STATISTICS</a></li>
									<li><a href="faq.html">FAQ</a></li>
									<li><a href="about-us.html">ABOUT US</a></li>
									<li><a href="contact-us.html">CONTACT US</a></li>
									<li><a href="shortcodes.html">SHORTCODES</a></li>
								</ul></li>
						</ul>
					</div>
					<div className="login-header-block">
						{show}

					</div>
				</div>
			</div>
		);
	}
}

export default connect(state => ({ isAuthen: state.isAuthen }))(Header)