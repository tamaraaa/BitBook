import React, { Component } from 'react';

export class FeedImageItem extends Component {
    render() {
        return (
            <div class="col s12 m12">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Card Title</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div class="card-action">
                        <a href="#">Image Posts</a>
                        <a href="#" class="bla">Comments</a>
                    </div>
                </div>
            </div>
        )
    }
}