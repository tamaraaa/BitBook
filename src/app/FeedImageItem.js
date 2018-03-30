import React, { Component } from 'react';
import { Link } from "react-router-dom";


export class FeedImageItem extends Component {


    render() {
        console.log(this.props.data);
        const { imageUrl } = this.props.data
        const { commentsNum } = this.props.data
        return (

            <div className="col s12 m12 ">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <img src={imageUrl} />
                    </div>
                    <div className="card-action">
                        <Link to="/PostDetails">Image Posts</Link>
                        <a href="#" className="bla">Comments :  {commentsNum}</a>
                    </div>
                </div>
            </div>

        )
    }
}