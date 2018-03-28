import React, { Component } from 'react';
import { Link } from "react-router-dom";


export class FeedImageItem extends Component {


    render() {
        console.log(this.props.data);
        const { imageUrl } = this.props.data
        const { commentsNum } = this.props.data
        return (

            <div class="col s12 m12 ">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <img src={imageUrl} />
                    </div>
                    <div class="card-action">
                        <Link to="/PostDetails">Image Posts</Link>
                        <a href="#" class="bla">Comments :  {commentsNum}</a>
                    </div>
                </div>
            </div>

        )
    }
}