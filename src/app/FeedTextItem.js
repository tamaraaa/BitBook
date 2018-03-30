import React, { Component } from 'react';
import { Link } from "react-router-dom";



export class FeedTextItem extends Component {


    render() {
        console.log(this.props.data);
        const { text } = this.props.data
        const { commentsNum } = this.props.data
        return (
            <div className="col s12 m12">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        {text}
                    </div>
                    <div className="card-action">
                        <Link to="/PostDetails">Text Posts</Link>
                        <a href="#" className="bla">Comments:{commentsNum}</a>
                    </div>
                </div>
            </div>
        )
    }
}