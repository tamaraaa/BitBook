import React, { Component } from 'react';
import { FeedItem } from './FeedItem'

import { Button } from './button'
import { TextModal } from './TextModal'
import { VideoModal } from './VideoModal'
import { ImgModal } from './ImgModal'


export class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.fetchPosts()
    }

    fetchPosts = () => {
        fetch('http://bitbookapi.azurewebsites.net/api/posts/', {
            headers: {
                "Content-Type": "application/json",
                "Key": "bitbook",
                "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                console.log(myJson);
                this.setState({ posts: myJson })
            })
    }

    openModal = (type) => {
        if (type === "text") {
            return <TextModal />
        } else if (type === "image") {
            return <ImgModal />
        } else if (type === "video") {
            return <VideoModal />
        }
    }

    createPost = (type, body) => {
        console.log(type, body)
        fetch('http://bitbookapi.azurewebsites.net/api/TextPosts', {
            headers: {
                "Content-Type": "application/json",
                "Key": "bitbook",
                "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
            })
            .then((response) => {
                return response.json();

            })
            .then((Json) => {
                console.log(Json);

            })

    }


    // send request
    // fetch all posts again
}


render() {
    if (this.state.posts.length == 0) {
        return <h1>Nothing in feed</h1>
    }

    return (
        <main>
            <div className="container">
                {this.state.posts.map((post) => <FeedItem key={post.id} post={post} />)}

                <VideoModal create={this.createPost} />
                <ImgModal create={this.createPost} />
                <TextModal create={this.createPost} />


                <Button openModal={this.openModal} />
            </div>
        </main >
    )
}
}
