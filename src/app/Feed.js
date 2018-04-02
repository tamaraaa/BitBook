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
            .then((posts) => {
                this.setState({ posts: posts })
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

        let postTypeUrl = "";
        let content = {};

        if (type === "text") {
            postTypeUrl = "TextPosts";
            content = {
                text: body
            }
            fetch(`http://bitbookapi.azurewebsites.net/api/${postTypeUrl}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Key": "bitbook",
                    "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
                },
                body: JSON.stringify(content)
            })


                .then((response) => {
                    return response.json();

                })
                .then((successfullyCreated) => {
                    if (successfullyCreated === true) {
                        this.fetchPosts();
                    } else {
                        console.log("Post creation failed!");
                    }
                })

        }
        else if (type === "img") {
            postTypeUrl = "ImagePosts";
            content = {
                imageUrl: body
            }
            fetch(`http://bitbookapi.azurewebsites.net/api/${postTypeUrl}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Key": "bitbook",
                    "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
                },
                body: JSON.stringify(content)
            })


                .then((response) => {
                    return response.json();

                })
                .then((successfullyCreated) => {
                    if (successfullyCreated === true) {
                        this.fetchPosts();
                    } else {
                        console.log("Post creation failed!");
                    }
                })

        }

        else if (type === "video") {
            postTypeUrl = "VideoPosts"
            content = {
                videoUrl: body
            }
            fetch(`http://bitbookapi.azurewebsites.net/api/${postTypeUrl}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Key": "bitbook",
                    "SessionId": "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94"
                },
                body: JSON.stringify(content)
            })


                .then((response) => {
                    return response.json();

                })
                .then((successfullyCreated) => {
                    if (successfullyCreated === true) {
                        this.fetchPosts();
                    } else {
                        console.log("Post creation failed!");
                    }
                })

        }
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

