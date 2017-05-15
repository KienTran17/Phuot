import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
    render() {
        return (
            <div id="content-block">
                <div className="container be-detail-container">
                    <div className="row">
                        <div className="col-xs-12 col-md-4 left-feild">
                            <div className="be-user-block style-3">
                                <div className="be-user-detail">
                                    <a className="be-ava-user style-2" href="blog-detail-2.html">
                                        <img src="../asset/img/ava_10.jpg" alt />
                                    </a>
                                    <a className="be-ava-left btn color-1 size-2 hover-1"><i className="fa fa-pencil" />Edit</a>
                                    <div className="be-ava-right btn btn-share color-4 size-2 hover-7">
                                        <i className="fa fa-share-alt" />share
                    <div className="share-buttons">
                                            <a className="color-1" href="blog-detail-2.html"><i className="fa fa-facebook" /> 278</a>
                                            <a className="color-2" href="blog-detail-2.html"><i className="fa fa-twitter" /> 180</a>
                                            <a className="color-3" href="blog-detail-2.html"><i className="fa fa-pinterest-p" /> 78</a>
                                            <a className="color-4" href="blog-detail-2.html"><i className="fa fa-linkedin" /> 53</a>
                                        </div>
                                    </div>
                                    <p className="be-use-name">Leigh Taylor</p>
                                    <div className="be-user-info">
                                        Barnsley, United Kingdom
                  </div>
                                    <div className="be-text-tags style-2">
                                        <a href="blog-detail-2.html">UI/UX</a>,
                    <a href="blog-detail-2.html">Web Design</a>,
                    <a href="blog-detail-2.html">Art Direction</a>
                                    </div>
                                    <div className="be-user-social">
                                        <a className="social-btn color-1" href="blog-detail-2.html"><i className="fa fa-facebook" /></a>
                                        <a className="social-btn color-2" href="blog-detail-2.html"><i className="fa fa-twitter" /></a>
                                        <a className="social-btn color-3" href="blog-detail-2.html"><i className="fa fa-google-plus" /></a>
                                        <a className="social-btn color-4" href="blog-detail-2.html"><i className="fa fa-pinterest-p" /></a>
                                        <a className="social-btn color-5" href="blog-detail-2.html"><i className="fa fa-instagram" /></a>
                                        <a className="social-btn color-6" href="blog-detail-2.html"><i className="fa fa-linkedin" /></a>
                                    </div>
                                    <a className="be-user-site" href="http://www.phoenix.cool"><i className="fa fa-link" /> www.phoenix.cool</a>
                                </div>
                                <div className="be-user-statistic">
                                    <div className="stat-row clearfix"><i className="stat-icon icon-views-b" /> Projects views<span className="stat-counter">218098</span></div>
                                    <div className="stat-row clearfix"><i className="stat-icon icon-like-b" />Appreciations<span className="stat-counter">14335</span></div>
                                    <div className="stat-row clearfix"><i className="stat-icon icon-followers-b" />Followers<span className="stat-counter">2208</span></div>
                                    <div className="stat-row clearfix"><i className="stat-icon icon-following-b" />Following<span className="stat-counter">0</span></div>
                                </div>
                            </div>
                            <div className="be-desc-block">
                                <div className="be-desc-author">
                                    <div className="be-desc-label">About Me</div>
                                    <div className="clearfix" />
                                    <div className="be-desc-text">
                                        Nam sit amet massa commodo, tristique metus at, consequat turpis. In vulputate justo at auctor mollis. Aliquam non sagittis tortor. Duis tristique suscipit risus, quis facilisis nisl congue vitae. Nunc varius pellentesque scelerisque. Etiam quis massa vitae lectus placerat ullamcorper pellentesque vel nisl.
                  </div>
                                </div>
                                <div className="be-desc-author">
                                    <div className="be-desc-label">My Values</div>
                                    <div className="clearfix" />
                                    <div className="be-desc-text">
                                        Sed dignissim scelerisque pretium. Vestibulum vel lacus laoreet nunc fermentum maximus. Proin id sodales sem, at consectetur urna. Proin vestibulum, erat a hendrerit sodales, nulla libero ornare dolor.
                  </div>
                                </div>
                            </div>
                            <a className="btn full color-1 size-1 hover-1"><i className="fa fa-plus" />add sections</a>
                        </div>
                        <div className="col-xs-12 col-md-8">
                            <div className="tab-wrapper style-1">
                                <div className="tab-nav-wrapper">
                                    <div className="nav-tab  clearfix">
                                        <div className="nav-tab-item active">
                                            <span>Projects</span>
                                        </div>
                                        <div className="nav-tab-item ">
                                            <span>Work In Progress</span>
                                        </div>
                                        <div className="nav-tab-item ">
                                            <span>Appreciated</span>
                                        </div>
                                        <div className="nav-tab-item ">
                                            <span>Collections</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabs-content clearfix">
                                    <div className="tab-info active">
                                        <div className="row">
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p1.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">The kitsch destruction of our world</a>
                                                    <span>
                                                        <a href="blog-detail-2.html" className="be-post-tag">Interaction Design</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">UI/UX</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">Web Design</a>
                                                    </span>
                                                    <div className="author-post">
                                                        <img src="../asset/img/a1.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                    </div>
                                                    <div className="info-block">
                                                        <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                        <span><i className="fa fa-eye" /> 789</span>
                                                        <span><i className="fa fa-comment-o" /> 20</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p2.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Treebeard</a>
                                                    <span>
                                                        <a href="blog-detail-2.html" className="be-post-tag">Interaction Design</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">UI/UX</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">Web Design</a>
                                                    </span>
                                                    <div className="author-post">
                                                        <img src="../asset/img/a2.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                    </div>
                                                    <div className="info-block">
                                                        <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                        <span><i className="fa fa-eye" /> 789</span>
                                                        <span><i className="fa fa-comment-o" /> 20</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p3.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Colors of Ramadan</a>
                                                    <span>
                                                        <a href="blog-detail-2.html" className="be-post-tag">Interaction Design</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">UI/UX</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">Web Design</a>
                                                    </span>
                                                    <div className="author-post">
                                                        <img src="../asset/img/a3.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                    </div>
                                                    <div className="info-block">
                                                        <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                        <span><i className="fa fa-eye" /> 789</span>
                                                        <span><i className="fa fa-comment-o" /> 20</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p6.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Fran Ewald for The Diaries Project</a>
                                                    <span>
                                                        <a href="blog-detail-2.html" className="be-post-tag">Interaction Design</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">UI/UX</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">Web Design</a>
                                                    </span>
                                                    <div className="author-post">
                                                        <img src="../asset/img/a6.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                    </div>
                                                    <div className="info-block">
                                                        <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                        <span><i className="fa fa-eye" /> 789</span>
                                                        <span><i className="fa fa-comment-o" /> 20</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p7.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">raindrops monochrome</a>
                                                    <span>
                                                        <a href="blog-detail-2.html" className="be-post-tag">Interaction Design</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">UI/UX</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">Web Design</a>
                                                    </span>
                                                    <div className="author-post">
                                                        <img src="../asset/img/a7.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                    </div>
                                                    <div className="info-block">
                                                        <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                        <span><i className="fa fa-eye" /> 789</span>
                                                        <span><i className="fa fa-comment-o" /> 20</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p8.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Racing Queensland</a>
                                                    <span>
                                                        <a href="blog-detail-2.html" className="be-post-tag">Interaction Design</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">UI/UX</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">Web Design</a>
                                                    </span>
                                                    <div className="author-post">
                                                        <img src="../asset/img/a7.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                    </div>
                                                    <div className="info-block">
                                                        <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                        <span><i className="fa fa-eye" /> 789</span>
                                                        <span><i className="fa fa-comment-o" /> 20</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p13.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Stay Ahead Series</a>
                                                    <span>
                                                        <a href="blog-detail-2.html" className="be-post-tag">Interaction Design</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">UI/UX</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">Web Design</a>
                                                    </span>
                                                    <div className="author-post">
                                                        <img src="../asset/img/a6.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                    </div>
                                                    <div className="info-block">
                                                        <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                        <span><i className="fa fa-eye" /> 789</span>
                                                        <span><i className="fa fa-comment-o" /> 20</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p14.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Faber-Castell / Psychological Problems</a>
                                                    <span>
                                                        <a href="blog-detail-2.html" className="be-post-tag">Interaction Design</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">UI/UX</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">Web Design</a>
                                                    </span>
                                                    <div className="author-post">
                                                        <img src="../asset/img/a5.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                    </div>
                                                    <div className="info-block">
                                                        <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                        <span><i className="fa fa-eye" /> 789</span>
                                                        <span><i className="fa fa-comment-o" /> 20</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p15.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Garry Simpson - Bridges - Intelligent Life Magazinen</a>
                                                    <span>
                                                        <a href="blog-detail-2.html" className="be-post-tag">Interaction Design</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">UI/UX</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">Web Design</a>
                                                    </span>
                                                    <div className="author-post">
                                                        <img src="../asset/img/a1.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                    </div>
                                                    <div className="info-block">
                                                        <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                        <span><i className="fa fa-eye" /> 789</span>
                                                        <span><i className="fa fa-comment-o" /> 20</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-info">
                                        <div className="row">
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p8.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Racing Queensland</a>
                                                    <span>
                                                        <a href="blog-detail-2.html" className="be-post-tag">Interaction Design</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">UI/UX</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">Web Design</a>
                                                    </span>
                                                    <div className="author-post">
                                                        <img src="../asset/img/a7.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                    </div>
                                                    <div className="info-block">
                                                        <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                        <span><i className="fa fa-eye" /> 789</span>
                                                        <span><i className="fa fa-comment-o" /> 20</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p12.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Face</a>
                                                    <span>
                                                        <a href="blog-detail-2.html" className="be-post-tag">Interaction Design</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">UI/UX</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">Web Design</a>
                                                    </span>
                                                    <div className="author-post">
                                                        <img src="../asset/img/a6.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                    </div>
                                                    <div className="info-block">
                                                        <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                        <span><i className="fa fa-eye" /> 789</span>
                                                        <span><i className="fa fa-comment-o" /> 20</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p2.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Treebeard</a>
                                                    <span>
                                                        <a href="blog-detail-2.html" className="be-post-tag">Interaction Design</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">UI/UX</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">Web Design</a>
                                                    </span>
                                                    <div className="author-post">
                                                        <img src="../asset/img/a1.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                    </div>
                                                    <div className="info-block">
                                                        <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                        <span><i className="fa fa-eye" /> 789</span>
                                                        <span><i className="fa fa-comment-o" /> 20</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p3.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Colors of Ramadan</a>
                                                    <span>
                                                        <a href="blog-detail-2.html" className="be-post-tag">Interaction Design</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">UI/UX</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">Web Design</a>
                                                    </span>
                                                    <div className="author-post">
                                                        <img src="../asset/img/a2.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                    </div>
                                                    <div className="info-block">
                                                        <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                        <span><i className="fa fa-eye" /> 789</span>
                                                        <span><i className="fa fa-comment-o" /> 20</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p4.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Leaving Home - L'Officiel Ukraine</a>
                                                    <span>
                                                        <a href="blog-detail-2.html" className="be-post-tag">Interaction Design</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">UI/UX</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">Web Design</a>
                                                    </span>
                                                    <div className="author-post">
                                                        <img src="../asset/img/a3.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                    </div>
                                                    <div className="info-block">
                                                        <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                        <span><i className="fa fa-eye" /> 789</span>
                                                        <span><i className="fa fa-comment-o" /> 20</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p7.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">raindrops monochrome</a>
                                                    <span>
                                                        <a href="blog-detail-2.html" className="be-post-tag">Interaction Design</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">UI/UX</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">Web Design</a>
                                                    </span>
                                                    <div className="author-post">
                                                        <img src="../asset/img/a6.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                    </div>
                                                    <div className="info-block">
                                                        <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                        <span><i className="fa fa-eye" /> 789</span>
                                                        <span><i className="fa fa-comment-o" /> 20</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p9.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">NAHA Finalist Hairstylist of the Year Allen Ruiz</a>
                                                    <span>
                                                        <a href="blog-detail-2.html" className="be-post-tag">Interaction Design</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">UI/UX</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">Web Design</a>
                                                    </span>
                                                    <div className="author-post">
                                                        <img src="../asset/img/a7.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                    </div>
                                                    <div className="info-block">
                                                        <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                        <span><i className="fa fa-eye" /> 789</span>
                                                        <span><i className="fa fa-comment-o" /> 20</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p13.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Stay Ahead Series</a>
                                                    <span>
                                                        <a href="blog-detail-2.html" className="be-post-tag">Interaction Design</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">UI/UX</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">Web Design</a>
                                                    </span>
                                                    <div className="author-post">
                                                        <img src="../asset/img/a5.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                    </div>
                                                    <div className="info-block">
                                                        <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                        <span><i className="fa fa-eye" /> 789</span>
                                                        <span><i className="fa fa-comment-o" /> 20</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p14.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Faber-Castell / Psychological Problems</a>
                                                    <span>
                                                        <a href="blog-detail-2.html" className="be-post-tag">Interaction Design</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">UI/UX</a>,
                            <a href="blog-detail-2.html" className="be-post-tag">Web Design</a>
                                                    </span>
                                                    <div className="author-post">
                                                        <img src="../asset/img/a1.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                    </div>
                                                    <div className="info-block">
                                                        <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                        <span><i className="fa fa-eye" /> 789</span>
                                                        <span><i className="fa fa-comment-o" /> 20</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-info">
                                        <div className="row">
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post style-4">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p16.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Wisdom For My Children, Life Lessons Through</a>
                                                    <div className="author-post clearfix">
                                                        <img src="../asset/img/a1.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                        <span className="like-counter"><i className="fa fa-thumbs-o-up" /> 405</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post style-4">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p17.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Créations Namale</a>
                                                    <div className="author-post clearfix">
                                                        <img src="../asset/img/a2.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                        <span className="like-counter"><i className="fa fa-thumbs-o-up" /> 405</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post style-4">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p18.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Crossfit : 15.4 Open Workout</a>
                                                    <div className="author-post clearfix">
                                                        <img src="../asset/img/a3.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                        <span className="like-counter"><i className="fa fa-thumbs-o-up" /> 405</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post style-4">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p15.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Garry Simpson - Bridges - Intelligent Life Magazine</a>
                                                    <div className="author-post clearfix">
                                                        <img src="../asset/img/a6.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                        <span className="like-counter"><i className="fa fa-thumbs-o-up" /> 405</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post style-4">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p14.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Faber-Castell / Psychological Problems</a>
                                                    <div className="author-post clearfix">
                                                        <img src="../asset/img/a7.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                        <span className="like-counter"><i className="fa fa-thumbs-o-up" /> 405</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post style-4">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p13.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Stay Ahead Series</a>
                                                    <div className="author-post clearfix">
                                                        <img src="../asset/img/a7.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                        <span className="like-counter"><i className="fa fa-thumbs-o-up" /> 405</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post style-4">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p12.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Face</a>
                                                    <div className="author-post clearfix">
                                                        <img src="../asset/img/a6.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                        <span className="like-counter"><i className="fa fa-thumbs-o-up" /> 405</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post style-4">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p19.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Promoção Facas Extra</a>
                                                    <div className="author-post clearfix">
                                                        <img src="../asset/img/a5.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                        <span className="like-counter"><i className="fa fa-thumbs-o-up" /> 405</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post style-4">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p11.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Tropicalia</a>
                                                    <div className="author-post clearfix">
                                                        <img src="../asset/img/a1.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                        <span className="like-counter"><i className="fa fa-thumbs-o-up" /> 405</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post style-4">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p10.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">tomorrow</a>
                                                    <div className="author-post clearfix">
                                                        <img src="../asset/img/a1.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                        <span className="like-counter"><i className="fa fa-thumbs-o-up" /> 405</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post style-4">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p9.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">NAHA Finalist Hairstylist of the Year Allen Ruiz</a>
                                                    <div className="author-post clearfix">
                                                        <img src="../asset/img/a1.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                        <span className="like-counter"><i className="fa fa-thumbs-o-up" /> 405</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-ml-12 col-xs-6 col-sm-4">
                                                <div className="be-post style-4">
                                                    <a href="blog-detail-2.html" className="be-img-block">
                                                        <img src="../asset/img/p8.jpg" alt="omg" />
                                                    </a>
                                                    <a href="blog-detail-2.html" className="be-post-title">Racing Queensland</a>
                                                    <div className="author-post clearfix">
                                                        <img src="../asset/img/a1.png" alt className="ava-author" />
                                                        <span>by <a href="blog-detail-2.html">Hoang Nguyen</a></span>
                                                        <span className="like-counter"><i className="fa fa-thumbs-o-up" /> 405</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-info">
                                        <div className="collection">
                                            <h3 className="menu-article">Creative Ideas</h3>
                                            <div className="collection-header">
                                                <span><i className="fa fa-user" />by <a href="blog-detail-2.html">Leigh Taylor</a> </span>
                                                <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                <span><i className="fa fa-eye" /> 789</span>
                                                <div className="edit-collection">
                                                    <i className="fa fa-pencil" />
                                                    <div className="c_edit">
                                                        <div className="btn-rename" href="blog-detail-2.html">
                                                            rename
                              <div className="message-popup">
                                                                <div className="message-popup-inner container">
                                                                    <div className="row">
                                                                        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                                                                            <i className="fa fa-times close-button" />
                                                                            <h5 className="large-popup-title">Rename</h5>
                                                                            <div className="form-group">
                                                                                <input className="form-input" required placeholder="Your text" />
                                                                            </div>
                                                                            <button className="btn btn-right color-1 size-1 hover-1">OK</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="blog-detail-2.html">delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-entry">
                                                <a href="blog-detail-2.html" className="portfolio-link type-2 clearfix">
                                                    <img src="../asset/img/collection_1.jpg" alt />
                                                    <img src="../asset/img/collection_2.jpg" alt />
                                                    <img src="../asset/img/collection_3.jpg" alt />
                                                    <img src="../asset/img/collection_4.jpg" alt />
                                                    <img src="../asset/img/collection_5.jpg" alt />
                                                    <div className="color_bg">
                                                        <span>view gallery</span>
                                                        <span className="child" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="collection">
                                            <h3 className="menu-article">Creative Agency</h3>
                                            <div className="collection-header">
                                                <span><i className="fa fa-user" />by <a href="blog-detail-2.html">Leigh Taylor</a> </span>
                                                <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                <span><i className="fa fa-eye" /> 789</span>
                                                <div className="edit-collection">
                                                    <i className="fa fa-pencil" />
                                                    <div className="c_edit">
                                                        <div className="btn-rename" href="blog-detail-2.html">
                                                            rename
                              <div className="message-popup">
                                                                <div className="message-popup-inner container">
                                                                    <div className="row">
                                                                        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                                                                            <i className="fa fa-times close-button" />
                                                                            <h5 className="large-popup-title">Rename</h5>
                                                                            <div className="form-group">
                                                                                <input className="form-input" required placeholder="Your text" />
                                                                            </div>
                                                                            <button className="btn btn-right color-1 size-1 hover-1">OK</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="blog-detail-2.html">delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-entry">
                                                <a href="blog-detail-2.html" className="portfolio-link type-2 clearfix">
                                                    <img src="../asset/img/collection_6.jpg" alt />
                                                    <img src="../asset/img/collection_7.jpg" alt />
                                                    <img src="../asset/img/collection_8.jpg" alt />
                                                    <img src="../asset/img/collection_9.jpg" alt />
                                                    <img src="../asset/img/collection_10.jpg" alt />
                                                    <div className="color_bg">
                                                        <span>view gallery</span>
                                                        <span className="child" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="collection">
                                            <h3 className="menu-article">Creative Agency</h3>
                                            <div className="collection-header">
                                                <span><i className="fa fa-user" />by <a href="blog-detail-2.html">Inspiration Art</a> </span>
                                                <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                <span><i className="fa fa-eye" /> 789</span>
                                                <div className="edit-collection">
                                                    <i className="fa fa-pencil" />
                                                    <div className="c_edit">
                                                        <div className="btn-rename" href="blog-detail-2.html">
                                                            rename
                              <div className="message-popup">
                                                                <div className="message-popup-inner container">
                                                                    <div className="row">
                                                                        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                                                                            <i className="fa fa-times close-button" />
                                                                            <h5 className="large-popup-title">Rename</h5>
                                                                            <div className="form-group">
                                                                                <input className="form-input" required placeholder="Your text" />
                                                                            </div>
                                                                            <button className="btn btn-right color-1 size-1 hover-1">OK</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="blog-detail-2.html">delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-entry">
                                                <a href="blog-detail-2.html" className="portfolio-link type-2 clearfix">
                                                    <img src="../asset/img/collection_11.jpg" alt />
                                                    <img src="../asset/img/collection_12.jpg" alt />
                                                    <img src="../asset/img/collection_13.jpg" alt />
                                                    <img src="../asset/img/collection_14.jpg" alt />
                                                    <img src="../asset/img/collection_15.jpg" alt />
                                                    <div className="color_bg">
                                                        <span>view gallery</span>
                                                        <span className="child" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="collection">
                                            <h3 className="menu-article">Ideas For Personal Site</h3>
                                            <div className="collection-header">
                                                <span><i className="fa fa-user" />by <a href="blog-detail-2.html">Inspiration Art</a> </span>
                                                <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                <span><i className="fa fa-eye" /> 789</span>
                                                <div className="edit-collection">
                                                    <i className="fa fa-pencil" />
                                                    <div className="c_edit">
                                                        <div className="btn-rename" href="blog-detail-2.html">
                                                            rename
                              <div className="message-popup">
                                                                <div className="message-popup-inner container">
                                                                    <div className="row">
                                                                        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                                                                            <i className="fa fa-times close-button" />
                                                                            <h5 className="large-popup-title">Rename</h5>
                                                                            <div className="form-group">
                                                                                <input className="form-input" required placeholder="Your text" />
                                                                            </div>
                                                                            <button className="btn btn-right color-1 size-1 hover-1">OK</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="blog-detail-2.html">delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-entry">
                                                <a href="blog-detail-2.html" className="portfolio-link type-2 clearfix">
                                                    <img src="../asset/img/collection_16.jpg" alt />
                                                    <img src="../asset/img/collection_17.jpg" alt />
                                                    <img src="../asset/img/collection_18.jpg" alt />
                                                    <img src="../asset/img/collection_19.jpg" alt />
                                                    <img src="../asset/img/collection_20.jpg" alt />
                                                    <div className="color_bg">
                                                        <span>view gallery</span>
                                                        <span className="child" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="collection">
                                            <h3 className="menu-article">Inspiration Photos</h3>
                                            <div className="collection-header">
                                                <span><i className="fa fa-user" />by <a href="blog-detail-2.html">Inspiration Art</a> </span>
                                                <span><i className="fa fa-thumbs-o-up" /> 360</span>
                                                <span><i className="fa fa-eye" /> 789</span>
                                                <div className="edit-collection">
                                                    <i className="fa fa-pencil" />
                                                    <div className="c_edit">
                                                        <div className="btn-rename" href="blog-detail-2.html">
                                                            rename
                              <div className="message-popup">
                                                                <div className="message-popup-inner container">
                                                                    <div className="row">
                                                                        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                                                                            <i className="fa fa-times close-button" />
                                                                            <h5 className="large-popup-title">Rename</h5>
                                                                            <div className="form-group">
                                                                                <input className="form-input" required placeholder="Your text" />
                                                                            </div>
                                                                            <button className="btn btn-right color-1 size-1 hover-1">OK</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="blog-detail-2.html">delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="collection-entry">
                                                <a href="blog-detail-2.html" className="portfolio-link type-2 clearfix">
                                                    <img src="../asset/img/collection_6.jpg" alt />
                                                    <img src="../asset/img/collection_10.jpg" alt />
                                                    <img src="../asset/img/collection_8.jpg" alt />
                                                    <img src="../asset/img/collection_11.jpg" alt />
                                                    <img src="../asset/img/collection_3.jpg" alt />
                                                    <div className="color_bg">
                                                        <span>view gallery</span>
                                                        <span className="child" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default connect(state => ({ isAuthen: state.isAuthen }))(Profile)