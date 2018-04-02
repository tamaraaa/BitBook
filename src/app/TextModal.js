import React, { Component } from 'react';
import M from "materialize-css"
import options from "materialize-css"
export class TextModal extends Component {
    state = {
        value: ""
    }

    componentDidMount() {
        var elem = document.querySelector('#textModal');
        var instance = M.Modal.init(elem, options);
    }

    onInputChange = (event) => {
        this.setState({ value: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault();

        this.props.create("text", this.state.value);
        this.setState({ value: "" })
    }

    render() {
        return (
            <div>
                <div id="textModal" className="modal">
                    <div className="modal-content">
                        <h4>New text post</h4>
                        <p>
                            <input value={this.state.value} type="text" onChange={this.onInputChange} value={this.state.value} />
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