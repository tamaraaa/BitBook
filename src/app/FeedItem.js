import React, { Component } from 'react';
import { FeedTextItem } from './FeedTextItem'
import { FeedImageItem } from './FeedImageItem'
import { FeedVideoItem } from './FeedVideoItem'

export class FeedItem extends Component {
    constructor(props) {
        super(props);
    }

    renderPostByType = (type) => {
        console.log(this.props);

        if (type === "text") {
            return <FeedTextItem data={this.props.post} />
        } else if (type === "image") {
            return <FeedImageItem data={this.props.post} />
        } else if (type === "video") {
            return <FeedVideoItem data={this.props.post} />
        }
    }

    render() {
        const { post } = this.props;

        return (
            <div class="row">
                {this.renderPostByType(post.type)}
            </div>

        )
    }
}

{/* <div class="col s12 m12">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">Card Title</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                            <a href="#">Video Posts</a>
                            <a href="#" class="bla">Comments</a>
                        </div>
                    </div>
                </div> */}