import React, { Component } from 'react';
import { Link } from "react-router-dom";



export class FeedTextItem extends Component {


    render() {
        console.log(this.props.data);
        const { text } = this.props.data
        const { commentsNum } = this.props.data
        return (
            <div class="col s12 m12">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        {text}
                    </div>
                    <div class="card-action">
                        <Link to="/PostDetails">Text Posts</Link>
                        <a href="#" class="bla">Comments:{commentsNum}</a>
                    </div>
                </div>
            </div>
        )
    }
}