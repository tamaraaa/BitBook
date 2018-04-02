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
            <div className="row">
                {this.renderPostByType(post.type)}
            </div>

        )
    }
}

