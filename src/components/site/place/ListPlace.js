import React, { Component } from 'react';
import getUserById from '../../../api/user/getUserById';
import getImageFromPlace from '../../../api/image/getImageFromPlace';
export default class ListPlace extends Component {
    constructor(props) {
        super(props);
        this.state = { user: {}, lstImage: [] };
    }
    componentDidMount() {
        const place = this.props.place;
        getUserById(place.user_id).then(detailUser => {
            this.setState({user: detailUser});
        });
        getImageFromPlace(place.id).then(lst=>{
            this.setState({lstImage: lst});
        });
    }
    render() {
        const place = this.props.place;
        const user = this.state.user;
        const lstImage = this.state.lstImage;
        return (
            <div className="custom-column-5">
                <div className="be-post">
                    <a href="blog-detail-2.html" className="be-img-block">
                        <img src={lstImage[0] ? lstImage[0].link : ""} alt="omg" />
                    </a>
                    <a href={"place/" + place.id} className="be-post-title">{place.name}</a>
                    {/*<span>
                        <a href="blog-detail-2.html" className="be-post-tag">Interaction Design</a>,
                                            <a href="blog-detail-2.html" className="be-post-tag">UI/UX</a>,
                                            <a href="blog-detail-2.html" className="be-post-tag">Web Design</a>
                    </span>*/}
                    <div className="author-post">
                        <img src={user.avatar} alt className="ava-author" />
                        <span>by <a href="blog-detail-2.html">{user.last_name + ' ' + user.first_name}</a></span>
                    </div>
                    <div className="info-block">
                        <span><i className="fa fa-thumbs-o-up" /> {place.like}</span>
                        <span><i className="fa fa-eye" /> {place.view}</span>
                        {/*<span><i className="fa fa-comment-o" /> 20</span>*/}
                    </div>
                </div>
            </div>
        );
    }
}

