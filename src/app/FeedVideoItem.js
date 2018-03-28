import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class FeedVideoItem extends Component {
    render() {
        const { videoUrl } = this.props.data
        const { commentsNum } = this.props.data
        return (
            <div className="col s12 m12">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">

                    </div>
                    <iframe src={videoUrl}></iframe>
                    <div class="card-action">
                        <Link to="/PostDetails">Video Posts</Link>
                        <a href="#" class="bla">Comments :{commentsNum}</a>
                    </div>
                </div>
            </div>
        )
    }
}