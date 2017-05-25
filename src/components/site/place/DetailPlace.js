import React, { Component } from 'react';
import getUserById from '../../../api/user/getUserById';
import getImageFromPlace from '../../../api/image/getImageFromPlace';
import getPlaceFromId from '../../../api/place/getPlaceFromId';

export default class ListPlace extends Component {
    constructor(props) {
        super(props);
        this.state = { place: {}, user: {}, lstImage: [] };

    }
    componentDidMount() {
        const id = this.props.match.params.id;
        getPlaceFromId(id).then(detailPlace => {
            this.setState({ place: detailPlace });
            getUserById(this.state.place.user_id).then(detailUser => {
                this.setState({ user: detailUser });
                getImageFromPlace(this.state.place.id).then(lst => {
                    this.setState({ lstImage: lst });
                });
            });
        });
    }
    render() {
        const key = this.props.key;
        const place = this.state.place;
        const user = this.state.user;
        const lstImage = this.state.lstImage;
        return (

            <div id="content-block">
                <div className="container be-detail-container">
                    <h2 className="content-title">
                        {place.name}
                    </h2>
                    <div className="row">
                        <div className="col-xs-12 col-sm-9">
                            <div className="blog-wrapper blog-list">
                                <div className="blog-post be-large-post">
                                    <div className="info-block clearfix">
                                        <div className="be-large-post-align">
                                            <span><i className="fa fa-thumbs-o-up" />  {place.like}</span>
                                            <span><i className="fa fa-eye" />  {place.view}</span>
                                            {/*<span><i className="fa fa-comment-o" /> 50</span>*/}
                                        </div>
                                    </div>
                                    <div className="be-large-post-align">
                                        <h3 className="be-post-title">
                                            {place.name}
                                        </h3>
                                        <span className="be-text-tags clearfix">
                                            <div className="post-date">
                                                <i className="fa fa-clock-o" />  {place.date_create};
                      </div>
                                            <div className="author-post">
                                                <img src={user.avatar} alt className="ava-author" />
                                                <span>by <a href="#">{user.first_name + ' ' + user.last_name}; </a></span>
                                            </div>
                                        </span>
                                        <div className="clear" />
                                    </div>

                                    {/*<div id="myCarousel" className="carousel slide" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            {lstImage.map((e, i) =>
                                                <li data-target="#myCarousel" data-slide-to={i} />
                                            )}
                                        </ol>
                                        <div className="carousel-inner">
                                            {lstImage.map((e, i) =>
                                                <div key={i} className={i == 0 ? "item active" : "item"} >
                                                    <img src={"/" + e.link} alt="ok" />
                                                </div>
                                            )}


                                        </div>
                                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                            <span className="fa fa-chevron-left" />
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                            <span className="fa fa-chevron-right" />
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>*/}

                                    <div className="post-preview be-large-post-slider">
                                        <div className="swiper-container" data-autoplay={0} data-loop={1} data-speed={500} data-center={0} data-slides-per-view={1}>
                                            <div className="swiper-wrapper">
                                                {lstImage.map((e, i) =>
                                                    <div key={i} className="swiper-slide active" data-val={i}>
                                                        <img className="img-responsive img-full" src={"/" + e.link} alt />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="pagination hidden" />
                                            <div className="swiper-arrow-left type-3" />
                                            <div className="swiper-arrow-right type-3" />
                                        </div>
                                    </div>
                                    <div className="blog-content be-large-post-align">
                                        <div className="post-text " dangerouslySetInnerHTML={{__html: place.description}}>
                                            
                                        </div>
                                    </div>
                                    <div className="be-large-post-align">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-6">
                                                <div className="be-bottom">
                                                    <h4 className="be-bottom-title">Tags</h4>
                                                    <div className="tags_block clearfix">
                                                        <ul>
                                                            <li><a href="#">photoshop</a></li>
                                                            <li><a href="#">national geographic</a></li>
                                                            <li><a href="#">nature</a></li>
                                                            <li><a href="#">responsive web design</a></li>
                                                            <li><a href="#">animals</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6">
                                                <div className="be-bottom right">
                                                    <h4 className="be-bottom-title">Share</h4>
                                                    <ul className="soc_buttons light">
                                                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                                        <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                                        <li><a href="##"><i className="fa fa-pinterest-p" /></a></li>
                                                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                                                        <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 style={{ fontSize: '20pt' }} className="letf-menu-article">Tham khảo các hành trình đã từng đi qua địa điểm này</h3>
                                <div className="blog-post">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-7">
                                            <div className="post-preview">
                                                <div className="swiper-container" data-autoplay={0} data-loop={1} data-speed={500} data-center={0} data-slides-per-view={1}>
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide active" data-val={0}>
                                                            <img className="img-responsive img-full" src="../asset/img/blog_2.jpg" alt />
                                                        </div>
                                                        <div className="swiper-slide" data-val={1}>
                                                            <img className="img-responsive img-full" src="../asset/img/blog_3.jpg" alt />
                                                        </div>
                                                        <div className="swiper-slide" data-val={2}>
                                                            <img className="img-responsive img-full" src="../asset/img/blog_1.jpg" alt />
                                                        </div>
                                                    </div>
                                                    <div className="pagination hidden" />
                                                    <div className="swiper-arrow-left type-2 type-3" />
                                                    <div className="swiper-arrow-right type-2 type-3" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-5">
                                            <div className="post-desc">
                                                <a className="post-label" href>Street Art on the London big wall</a>
                                                <div className="post-text">Morbi efficitur feugiat erat a efficitur. Donec interdum, nunc ac elementum auctor, dui nisl placerat odio, eget
                          sed mattis.</div>
                                                <div className="author-post">
                                                    <img src="../asset/img/a1.png" alt className="ava-author" />
                                                    <span>by <a href="#">Hoang Nguyen</a>, April 23, 2015</span>
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
                                <div className="be-comment-block">
                                    <h1 className="comments-title">Comments (3)</h1>
                                    <div className="be-comment">
                                        <div className="be-img-comment">
                                            <a href="blog-detail-2.html">
                                                <img src="../asset/img/c1.png" alt className="be-ava-comment" />
                                            </a>
                                        </div>
                                        <div className="be-comment-content">
                                            <span className="be-comment-name">
                                                <a href="blog-detail-2.html">Ravi Sah</a>
                                            </span>
                                            <span className="be-comment-time">
                                                <i className="fa fa-clock-o" />
                                                May 27, 2015 at 3:14am
                      </span>
                                            <p className="be-comment-text">
                                                Pellentesque gravida tristique ultrices. Sed blandit varius mauris, vel volutpat urna hendrerit id. Curabitur rutrum dolor
                        gravida turpis tristique efficitur.
                      </p>
                                        </div>
                                    </div>
                                    <div className="be-comment">
                                        <div className="be-img-comment">
                                            <a href="blog-detail-2.html">
                                                <img src="../asset/img/c4.png" alt className="be-ava-comment" />
                                            </a>
                                        </div>
                                        <div className="be-comment-content">
                                            <span className="be-comment-name">
                                                <a href="blog-detail-2.html">Phoenix, the Creative Studio</a>
                                            </span>
                                            <span className="be-comment-time">
                                                <i className="fa fa-clock-o" />
                                                May 27, 2015 at 3:14am
                      </span>
                                            <p className="be-comment-text">
                                                Nunc ornare sed dolor sed mattis. In scelerisque dui a arcu mattis, at maximus eros commodo. Cras magna nunc, cursus lobortis
                        luctus at, sollicitudin vel neque. Duis eleifend lorem non ant. Proin ut ornare lectus, vel eleifend est. Fusce
                        hendrerit dui in turpis tristique blandit.
                      </p>
                                        </div>
                                    </div>
                                    <div className="be-comment">
                                        <div className="be-img-comment">
                                            <a href="blog-detail-2.html">
                                                <img src="../asset/img/c5.png" alt className="be-ava-comment" />
                                            </a>
                                        </div>
                                        <div className="be-comment-content">
                                            <span className="be-comment-name">
                                                <a href="blog-detail-2.html">Cüneyt ŞEN</a>
                                            </span>
                                            <span className="be-comment-time">
                                                <i className="fa fa-clock-o" />
                                                May 27, 2015 at 3:14am
                      </span>
                                            <p className="be-comment-text">
                                                Cras magna nunc, cursus lobortis luctus at, sollicitudin vel neque. Duis eleifend lorem non ant
                      </p>
                                        </div>
                                    </div>
                                    <form className="form-block">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-6">
                                                <div className="form-group fl_icon">
                                                    <div className="icon"><i className="fa fa-user" /></div>
                                                    <input className="form-input" type="text" placeholder="Your name" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 fl_icon">
                                                <div className="form-group fl_icon">
                                                    <div className="icon"><i className="fa fa-envelope-o" /></div>
                                                    <input className="form-input" type="text" placeholder="Your email" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12">
                                                <div className="form-group">
                                                    <textarea className="form-input" required placeholder="Your text" defaultValue={""} />
                                                </div>
                                            </div>
                                            <a className="btn color-1 size-2 hover-1 pull-right">submit</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            <form action="./" className="input-search">
                                <input type="text" required placeholder="Enter keyword" />
                                <i className="fa fa-search" />
                                <input type="submit" defaultValue />
                            </form>
                            <div className="be-vidget">
                                <h3 className="letf-menu-article">
                                    Categories
                </h3>
                                <div className="creative_filds_block">
                                    <div className="ul">
                                        <a href="blog-detail-2.html">Graphic Design		</a>
                                        <a href="blog-detail-2.html">Photography			</a>
                                        <a href="blog-detail-2.html">Interaction Design	</a>
                                        <a href="blog-detail-2.html">Art Direction		</a>
                                        <a href="blog-detail-2.html">Illustration		</a>
                                    </div>
                                </div>
                            </div>
                            <div className="be-vidget">
                                <h3 className="letf-menu-article">
                                    Popular Posts
                </h3>
                                <div className="be-post style-2">
                                    <a href="blog-detail-2.html" className="be-post-title">Arctic monkeys. Space adventures in the action</a>
                                    <a href="blog-detail-2.html" className="be-img-block">
                                        <img src="../asset/img/be_post_1.jpg" alt="omg" />
                                    </a>
                                    <span>
                                        Pellentesque consectetur, est vel efficitur posuere, neque dolor accumsan
                  </span>
                                </div>
                                <div className="be-post style-2">
                                    <a href="blog-detail-2.html" className="be-post-title">Cubism as art direction</a>
                                    <a href="blog-detail-2.html" className="be-img-block">
                                        <img src="../asset/img/be_post_2.jpg" alt="omg" />
                                    </a>
                                    <span>
                                        Cras pellentesque blandit arcu eget laoreet. Nulla finibus non.
                  </span>
                                </div>
                            </div>
                            <div className="be-vidget">
                                <h3 className="letf-menu-article">
                                    Popular Tags
                </h3>
                                <div className="tags_block clearfix">
                                    <ul>
                                        <li><a href="blog-detail-2.html">photoshop</a></li>
                                        <li><a href="blog-detail-2.html">graphic</a></li>
                                        <li><a href="blog-detail-2.html">art</a></li>
                                        <li><a href="blog-detail-2.html">website</a></li>
                                        <li><a href="blog-detail-2.html">logo</a></li>
                                        <li><a href="blog-detail-2.html">identity</a></li>
                                        <li><a href="blog-detail-2.html">logo design</a></li>
                                        <li><a href="blog-detail-2.html">interactive</a></li>
                                        <li><a href="blog-detail-2.html">blue</a></li>
                                        <li><a href="blog-detail-2.html">branding</a></li>
                                    </ul>
                                </div>
                            </div>
                            <h3 className="letf-menu-article">
                                Slider widget
              </h3>
                            <div className="swiper-container" data-autoplay={5000} data-loop={1} data-speed={500} data-center={0} data-slides-per-view={1}>
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="be-post style-3">
                                            <a href="blog-detail-2.html" className="be-img-block">
                                                <img src="../asset/img/be_slider_1.jpg" height={202} width={269} alt="omg" />
                                            </a>
                                            <a href="blog-detail-2.html" className="be-post-title">Defence</a>
                                            <span>
                                                <a href="blog-detail-2.html" className="be-post-tag">Art direction</a>,
                        <a href="blog-detail-2.html" className="be-post-tag">Web Design</a>,
                        <a href="blog-detail-2.html" className="be-post-tag">Interactiob design</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="be-post style-3">
                                            <a href="blog-detail-2.html" className="be-img-block">
                                                <img src="../asset/img/be_slider_1.jpg" height={202} width={269} alt="omg" />
                                            </a>
                                            <a href="blog-detail-2.html" className="be-post-title">Defence</a>
                                            <span>
                                                <a href="blog-detail-2.html" className="be-post-tag">Art direction</a>,
                        <a href="blog-detail-2.html" className="be-post-tag">Web Design</a>,
                        <a href="blog-detail-2.html" className="be-post-tag">Interactiob design</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="be-post style-3">
                                            <a href="blog-detail-2.html" className="be-img-block">
                                                <img src="../asset/img/be_slider_1.jpg" height={202} width={269} alt="omg" />
                                            </a>
                                            <a href="blog-detail-2.html" className="be-post-title">Defence</a>
                                            <span>
                                                <a href="blog-detail-2.html" className="be-post-tag">Art direction</a>,
                        <a href="blog-detail-2.html" className="be-post-tag">Web Design</a>,
                        <a href="blog-detail-2.html" className="be-post-tag">Interactiob design</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="be-post style-3">
                                            <a href="blog-detail-2.html" className="be-img-block">
                                                <img src="../asset/img/be_slider_1.jpg" height={202} width={269} alt="omg" />
                                            </a>
                                            <a href="blog-detail-2.html" className="be-post-title">Defence</a>
                                            <span>
                                                <a href="blog-detail-2.html" className="be-post-tag">Art direction</a>,
                        <a href="blog-detail-2.html" className="be-post-tag">Web Design</a>,
                        <a href="blog-detail-2.html" className="be-post-tag">Interactiob design</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pagination">
                                </div>
                            </div>
                            <div className="be-vidget">
                                <h3 className="letf-menu-article">
                                    Archive
                </h3>
                                <div className="accordion style-1">
                                    <div className="acc-panel">
                                        <div className="acc-title">2015</div>
                                        <div className="acc-body">
                                            <p><a className="archive-link clearfix" href="blog-detail-2.html">January <span className="count">13</span></a></p>
                                            <p><a className="archive-link clearfix" href="blog-detail-2.html">February <span className="count">225</span></a></p>
                                            <p><a className="archive-link clearfix" href="blog-detail-2.html">March <span className="count">31</span></a></p>
                                        </div>
                                    </div>
                                    <div className="acc-panel">
                                        <div className="acc-title">2014</div>
                                        <div className="acc-body">
                                            <p><a className="archive-link clearfix" href="blog-detail-2.html">January <span className="count">13</span></a></p>
                                            <p><a className="archive-link clearfix" href="blog-detail-2.html">February <span className="count">225</span></a></p>
                                            <p><a className="archive-link clearfix" href="blog-detail-2.html">March <span className="count">31</span></a></p>
                                        </div>
                                    </div>
                                    <div className="acc-panel">
                                        <div className="acc-title">2013</div>
                                        <div className="acc-body">
                                            <p><a className="archive-link clearfix" href="blog-detail-2.html">January <span className="count">13</span></a></p>
                                            <p><a className="archive-link clearfix" href="blog-detail-2.html">February <span className="count">225</span></a></p>
                                            <p><a className="archive-link clearfix" href="blog-detail-2.html">March <span className="count">31</span></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="be-vidget">
                                <h3 className="letf-menu-article">
                                    Gallery
                </h3>
                                <div className="gal-vidget">
                                    <div className="row row20">
                                        <div className="col-xs-6">
                                            <a className="gal-vidget-link" href="blog-detail-2.html"><img className="img-responsive img-full" src="../asset/img/be_gal_1.jpg" alt /></a>
                                        </div>
                                        <div className="col-xs-6">
                                            <a className="gal-vidget-link" href="blog-detail-2.html"><img className="img-responsive img-full" src="../asset/img/be_gal_2.jpg" alt /></a>
                                        </div>
                                        <div className="col-xs-6">
                                            <a className="gal-vidget-link" href="blog-detail-2.html"><img className="img-responsive img-full" src="../asset/img/be_gal_3.jpg" alt /></a>
                                        </div>
                                        <div className="col-xs-6">
                                            <a className="gal-vidget-link" href="blog-detail-2.html"><img className="img-responsive img-full" src="../asset/img/be_gal_4.jpg" alt /></a>
                                        </div>
                                        <div className="col-xs-6">
                                            <a className="gal-vidget-link" href="blog-detail-2.html"><img className="img-responsive img-full" src="../asset/img/be_gal_5.jpg" alt /></a>
                                        </div>
                                        <div className="col-xs-6">
                                            <a className="gal-vidget-link" href="blog-detail-2.html"><img className="img-responsive img-full" src="../asset/img/be_gal_6.jpg" alt /></a>
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

