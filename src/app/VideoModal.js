import React, { Component } from 'react';
import M from "materialize-css"
import options from "materialize-css"
export class VideoModal extends Component {

    state = {
        value: ""
    }

    componentDidMount() {
        var elem = document.querySelector('#videoModal');
        M.Modal.init(elem, options);
    }

    onInputChange = (event) => {
        this.setState({ value: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault();

        this.props.create("video", this.state.value);
    }

    render() {
        return (
            <div>
                <div id="videoModal" className="modal">
                    <div className="modal-content">
                        <h4>New video post</h4>
                        <p>
                            <input type="video" value={this.state.value} onChange={this.onInputChange} />
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