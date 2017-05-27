import React, { Component } from 'react';
import { connect } from 'react-redux';
import getUserByUserName from '../../../api/user/getUserByUserName';
import getListPlaceFromUser from '../../../api/user/getListPlaceFromUser';
import ListPlaceUser from './ListPlaceUser';
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {}, lstPlace: [], first_name: '', last_name: '', description: '' };
  }
  componentDidMount() {
    const token = getCookie('tk');
    getUserByUserName(token).then(user => {
      this.setState({ user: user, first_name: user.first_name, last_name: user.last_name });
    })
  }
  handleFirstName(event) {
    this.setState({ first_name: event.target.value });
  }
  handleLastName(event) {
    this.setState({ last_name: event.target.value });
  }
  handleDescription(event) {
    this.setState({ description: event.target.value });
  }
  render() {
    const user = this.state.user;
    return (
      <div id="content-block">
        <div className="container be-detail-container">
          <div className="row">
            <div className="col-xs-12 col-md-3 left-feild">
              <div className="be-vidget back-block">
                <a href="/profile" className="btn full color-1 size-1 hover-1"><i className="fa fa-chevron-left" />Quay Lại Trang Cá Nhân</a>
              </div>
              <div className="be-vidget hidden-xs hidden-sm" id="scrollspy">
                <h3 style={{ fontSize: "14pt", fontWeight: "bold" }} className="letf-menu-article">
                  Chọn Thông Tin
                </h3>
                <div style={{ fontSize: "10pt" }} className="creative_filds_block">
                  <ul className="ul nav">
                    <li><a href="#" >Thông Tin Cơ Bản</a></li>
                    <li><a href="#">Thay Đổi Mật Khẩu</a></li>
                    <li><a href="#">Mạng Xã Hội Của Tôi</a></li>
                    <li><a href="#">Vài Nét Về Tôi</a></li>
                  </ul>
                </div>
                {/*<a className="btn full color-1 size-1 hover-1 add_section"><i className="fa fa-plus" />add sections</a>	*/}
              </div>
            </div>
            <div className="col-xs-12 col-md-9 _editor-content_">
              <div className="affix-block" id="basic-information">
                <div className="be-large-post">
                  <div className="info-block style-2">
                    <div className="be-large-post-align"><h3 style={{ fontSize: "14pt", fontWeight: "bold" }} className="info-block-label">Thông Tin Cơ Bản</h3></div>
                  </div>
                  <div className="be-large-post-align">
                    <div className="be-change-ava">
                      <a className="be-ava-user style-2" href="blog-detail-2.html">
                        <img src={user.avatar} alt />
                      </a>
                      <a className="btn color-4 size-2 hover-7">Thay Đổi Ảnh Đại Diện</a>
                    </div>
                  </div>
                  <div className="be-large-post-align">
                    <div className="row">
                      <div className="input-col col-xs-12 col-sm-6">
                        <div className="form-group fg_icon focus-2">
                          <div style={{ fontSize: "11pt", fontWeight: "bold" }} className="form-label">Họ</div>
                          <input className="form-input" type="text" onChange={this.handleFirstName} value={this.state.first_name} />
                        </div>
                      </div>
                      <div className="input-col col-xs-12 col-sm-6">
                        <div className="form-group focus-2">
                          <div style={{ fontSize: "11pt", fontWeight: "bold" }} className="form-label">Tên</div>
                          <input className="form-input" type="text" onChange={this.handleLastName} value={this.state.last_name} />
                        </div>
                      </div>

                      {/*<div className="input-col col-xs-12 col-sm-6">
                        <div className="form-label">Country</div>
                        <div className="be-drop-down icon-none">
                          <span className="be-dropdown-content"> United Kingdom </span>
                          <ul className="drop-down-list">
                            <li><a>USA</a></li>
                            <li><a>India</a></li>
                            <li><a>Mexica</a></li>
                            <li><a>Russia</a></li>
                            <li><a>Italy</a></li>
                          </ul>
                        </div>
                      </div>*/}

                      {/*<div className="col-xs-12 col-sm-3">
                        <div className="be-drop-down color-2">
                          <i className="fa fa-picture-o" />
                          <span className="be-dropdown-content"> Call to action </span>
                          <ul className="drop-down-list" style={{ display: 'none', height: 208, paddingTop: 0, marginTop: 0, paddingBottom: 0, marginBottom: 0 }}>
                            <li><a>Featured</a></li>
                            <li><a>Most Appreciated</a></li>
                            <li><a>Most Viewed</a></li>
                            <li><a>Most Discussed</a></li>
                            <li><a>Most Recent</a></li>
                          </ul>
                        </div>
                      </div>*/}

                    </div>
                  </div>
                </div>
              </div>
              <div className="affix-block" id="edit-password">
                <div className="be-large-post">
                  <div className="info-block style-2">
                    <div className="be-large-post-align"><h3 style={{ fontSize: "14pt", fontWeight: "bold" }} className="info-block-label">Thay Đổi Mật Khẩu</h3></div>
                  </div>
                  <div className="be-large-post-align">
                    <div className="row">
                      <div className="input-col col-xs-12 col-sm-4">
                        <div className="form-group focus-2">
                          <div style={{ fontSize: "11pt", fontWeight: "bold" }} className="form-label">Nhập Mật Khẩu Củ</div>
                          <input style={{ fontSize: "9pt", fontWeight: "bold" }} className="form-input" type="password" placeholder="Nhập Mật Khẩu củ" />
                        </div>
                      </div>
                      <div className="input-col col-xs-12 col-sm-4">
                        <div className="form-group focus-2">
                          <div style={{ fontSize: "11pt", fontWeight: "bold" }} className="form-label">Nhập Mật Khẩu Mới</div>
                          <input style={{ fontSize: "9pt", fontWeight: "bold" }} className="form-input" type="password" placeholder="Nhập Mật Khẩu Mới" />
                        </div>
                      </div>
                      <div className="input-col col-xs-12 col-sm-4">
                        <div className="form-group focus-2">
                          <div style={{ fontSize: "11pt", fontWeight: "bold" }} className="form-label">Xác Nhận Lại Mật Khẩu</div>
                          <input style={{ fontSize: "9pt", fontWeight: "bold" }} className="form-input" type="password" placeholder="Xác Nhận Lại Mật Khẩu" />
                        </div>
                      </div>
                      <div className="col-xs-12">
                        <a className="btn color-1 size-2 hover-1 btn-right">Đổi Mật Khẩu</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="affix-block" id="on-the-web">
                <div className="be-large-post">
                  <div className="info-block style-2">
                    <div className="be-large-post-align"><h3 style={{ fontSize: "14pt", fontWeight: "bold" }} className="info-block-label">Mạng Xã Hội Của Tôi</h3></div>
                  </div>
                  <div className="be-large-post-align">
                    <div className="social-input form-group focus-2">
                      <div className="s_icon">
                        <div className="social-bars"><i className="fa fa-bars" /></div>
                        <div className="social-btn color-1" href="blog-detail-2.html"><i className="fa fa-facebook" /></div>
                      </div>
                      <div className="s_input">
                        <input className="form-input" type="text" defaultValue="http:// facebook.com/taylor" />
                      </div>
                    </div>
                    <div className="social-input form-group focus-2">
                      <div className="s_icon">
                        <div className="social-bars"><i className="fa fa-bars" /></div>
                        <div className="social-btn color-2" href="blog-detail-2.html"><i className="fa fa-twitter" /></div>
                      </div>
                      <div className="s_input">
                        <input className="form-input" type="text" defaultValue="http:// twitter.com/taylor" />
                      </div>
                    </div>
                    <div className="social-input form-group focus-2">
                      <div className="s_icon">
                        <div className="social-bars"><i className="fa fa-bars" /></div>
                        <div className="social-btn color-3" href="blog-detail-2.html"><i className="fa fa-google-plus" /></div>
                      </div>
                      <div className="s_input">
                        <input className="form-input" type="text" defaultValue="http:// googleplus.com/taylor" />
                      </div>
                    </div>
                    <div className="social-input form-group focus-2">
                      <div className="s_icon">
                        <div className="social-bars"><i className="fa fa-bars" /></div>
                        <div className="social-btn color-4" href="blog-detail-2.html"><i className="fa fa-pinterest-p" /></div>
                      </div>
                      <div className="s_input">
                        <input className="form-input" type="text" defaultValue="http:// pinterest.com/taylor" />
                      </div>
                    </div>
                    <div className="social-input form-group focus-2">
                      <div className="s_icon">
                        <div className="social-bars"><i className="fa fa-bars" /></div>
                        <div className="social-btn color-5" href="blog-detail-2.html"><i className="fa fa-instagram" /></div>
                      </div>
                      <div className="s_input">
                        <input className="form-input" type="text" defaultValue="http:// instagram.com/taylor" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="affix-block" id="about-me">
                <div className="be-large-post">
                  <div className="info-block style-2">
                    <div className="be-large-post-align"><h3 style={{ fontSize: "14pt", fontWeight: "bold" }} className="info-block-label">Vài Nét Về Tôi</h3></div>
                  </div>
                  <div className="be-large-post-align">
                    <div className="row">
                      {/*<div className="input-col col-xs-12">
                        <div className="form-group focus-2">
                          <div style={{ fontSize: "11pt", fontWeight: "bold" }} className="form-label">Section Title</div>
                          <input className="form-input" type="text" placeholder="About Me" />
                        </div>
                      </div>*/}
                      <div className="input-col col-xs-12">
                        <div className="form-group focus-2">
                          <div style={{ fontSize: "11pt", fontWeight: "bold" }} className="form-label">Mô Tả</div>
                          <textarea className="form-input" required placeholder="Vài Nét Về Tôi" onChange={this.handleDescription} value={this.state.handleDescription} defaultValue={""} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*<div className="affix-block" id="web-references">
                <div className="be-large-post">
                  <div className="info-block style-2">
                    <div className="be-large-post-align"><h3 className="info-block-label">Web References</h3></div>
                  </div>
                  <div className="be-large-post-align">
                    <div className="row">
                      <div className="input-col col-xs-12 col-sm-5">
                        <div className="form-group focus-2">
                          <div className="form-label">Link Title</div>
                          <input className="form-input" type="text" placeholder="Enter title" />
                        </div>
                      </div>
                      <div className="input-col col-xs-12 col-sm-5">
                        <div className="form-group focus-2">
                          <div className="form-label">Link descriprion</div>
                          <input className="form-input" type="text" placeholder="Enter descriprion" />
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-2">
                        <a href="blog-detail-2.html" className="btn full btn-input color-1 size-4 hover-1">add</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>*/}
              {/*<a className="btn full color-1 size-1 hover-1 add_section"><i className="fa fa-plus" />add sections</a>																				*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}