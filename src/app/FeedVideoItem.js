import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class FeedVideoItem extends Component {


    render() {
        let { videoUrl } = this.props.data;

        // https://www.youtube.com/watch?v=Z_fNOPwGI7k
        // https://www.youtube.com/embed/Z_fNOPwGI7k

        if (videoUrl.indexOf("embed/") === -1) {
            videoUrl = videoUrl.replace("watch?v=", "embed/")
        }

        const { commentsNum } = this.props.data

        return (
            <div className="col s12 m12">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">

                    </div>
                    <iframe width="100%" src={videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    <div class="card-action">
                        <Link to="/PostDetails">Video Posts</Link>
                        <a href="#" class="bla">Comments :{commentsNum}</a>
                    </div>
                </div>
            </div>
        )
    }
}