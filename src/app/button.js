import React, { Component } from 'react';
import { TextModal } from './TextModal'
import M from "materialize-css"

export class Button extends Component {

    componentDidMount() {
        let elem = document.querySelector('.fixed-action-btn');
        M.FloatingActionButton.init(elem, {
            direction: 'top'
        });
    }

    onButtonClick = (event) => {
        event.preventDefault();

        const type = event.currentTarget.getAttribute("data-type");
        this.props.openModal(type);
    }

    render() {
        return (
            <div className="fixed-action-btn">
                <a className="btn-floating btn-large red">
                    <i className="large material-icons">+</i>
                </a>
                <ul>
                    <li data-target="textModal" className="modal-trigger">
                        <a href="#" className="btn-floating red" onClick={this.onButtonClick} data-type="text">
                            <i className="material-icons">sms</i>
                        </a>
                    </li>
                    <li data-target="videoModal" className=" modal-trigger">
                        <a className="btn-floating yellow darken-1" onClick={this.onButtonClick} data-type="video">
                            <i className="material-icons">play_circle_outline</i>
                        </a>
                    </li>
                    <li data-target="imageModal" className=" modal-trigger">
                        <a className="btn-floating green" onClick={this.onButtonClick} data-type="image">
                            <i className="material-icons">image</i>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }

}
