import React, { Component } from 'react';
import { FeedItem } from './FeedItem'
export class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        // fetch('http://bitbookapi.azurewebsites.net/api/posts/', {
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Key": "Key:bitbook",
        //         "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
        //     }
        // })
        //     .then(function (response) {
        //         // console.log(response);
        //         return response.json();
        //     })
        //     .then(function (myJson) {
        //         return myJson
        //     })
        //     .then((myJson) => {
        //         this.setState({ posts: myJson })
        //     });
    }


    render() {
        return (
            <div className="container">
                <h1>Nothing in feed</h1>
                <FeedItem type="video" />
                <FeedItem type="image" />
                <FeedItem type="text" />
            </div>
        )


    }
}
