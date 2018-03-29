import React, { Component } from 'react';
import {TextModal} from './TextModal'
import M from "materialize-css"

export class Button extends Component {

    componentDidMount() {
        let elem = document.querySelector('.fixed-action-btn');
        let instance = M.FloatingActionButton.init(elem, {
            direction: 'top'
        });
    }

    render() {
        return (
            <div class="fixed-action-btn">
                <a class="btn-floating btn-large red">
                    <i class="large material-icons">+</i>
                </a>
                <ul>
                    <li  data-target="modal1"  class=" modal-trigger"  onClick={this.props.openModal} type="text" ><a class="btn-floating red  "><span>text</span><i class="material-icons"></i></a></li>
                    <li  data-target="modal1"  class=" modal-trigger"  onClick={this.props.openModal} type="video"><a class="btn-floating yellow darken-1"><span>video</span><i class="material-icons"></i></a></li>
                    <li  data-target="modal1"  class=" modal-trigger"  onClick={this.props.openModal} type="image"><a class="btn-floating green"><span>image</span><i class="material-icons"></i></a></li>
                  
                </ul>
            </div>
        )
    }

}
