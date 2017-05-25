import React, { Component } from 'react';
import { connect } from 'react-redux';
import getImageFromPlace from '../../../api/image/getImageFromPlace';
class ListPlaceUser extends Component {
    constructor(props) {
        super(props);
        this.state = ({lstImage: []})
    }
    componentDidMount() {
        getImageFromPlace(this.props.place.id).then(lst => {
            this.setState({ lstImage: lst });
        });
    }
    render() {
        const user = this.props.user;
        const place = this.props.place;
        const lstImage = this.state.lstImage;
        return (
            <div className="col-ml-12 col-xs-6 col-sm-4">
                <div className="be-post">
                    <a href={"/place/" + place.id} className="be-img-block">
                        {/*image here*/}
                        <img src="" alt={place.name} />
                        {/*end image*/}
                    </a>
                    <a href={"/place/" + place.id} className="be-post-title">{place.name}</a>
                    <span>
                        <a href={"/place/" + place.id} className="be-post-tag"  dangerouslySetInnerHTML={{__html: place.description}}></a>,

					</span>
                    <div className="author-post">
                        <img src={user.avatar} alt="" className="ava-author" />
                        <span>by <a href="/profile">{user.last_name + " " + user.first_name}</a></span>
                    </div>
                    <div className="info-block">
                        <span><i className="fa fa-thumbs-o-up"></i> {place.like}</span>
                        <span><i className="fa fa-eye"></i> {place.view}</span>
                        <span><i className="fa fa-comment-o"></i> 20</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(state => ({ isAuthen: state.isAuthen }))(ListPlaceUser)