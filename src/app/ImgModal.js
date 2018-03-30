import React, { Component } from 'react';

import M from "materialize-css"
import options from "materialize-css"
export class ImgModal extends Component {
    state = {
        value: ""
    }

    componentDidMount() {
        var elem = document.querySelector('#imageModal');
        var instance = M.Modal.init(elem, options);
    }


    onInputChange = (event) => {
        this.setState({ value: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault();

        this.props.create("text", this.state.value);
    }


    render() {
        return (
            <div>
                <div id="imageModal" className="modal">
                    <div className="modal-content">
                        <h4>New image post</h4>
                        <p>
                            <input type="text" value={this.state.value} onChange={this.onInputChange} />
                        </p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.onSubmit}>POST</a>
                    </div>
                </div>
            </div>
        )
    }
}