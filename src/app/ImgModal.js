import React, { Component } from 'react';

import M from "materialize-css"
import options from "materialize-css"
export class ImgModal extends Component {
    state = {
        value: "",
        error: ""
    }

    componentDidMount() {
        var elem = document.querySelector('#imageModal');
        var instance = M.Modal.init(elem, options);
    }


    onInputChange = (event) => {

        this.setState({ value: event.target.value })
    }

    onSubmit = (event) => {
        // let val = this.state.value
        // if (val.lastIndexOf(".") === -1) {
        //     this.setState({ error: "not valid" })
        // }
        event.preventDefault();
        this.props.create("img", this.state.value);
        this.setState({ value: "", error: "" })
        console.log(this.state);


    }


    render() {
        return (
            <div>
                <div id="imageModal" className="modal">
                    <div className="modal-content">
                        <h4>New image post</h4>
                        <p>
                            <input type="img" value={this.state.value} onChange={this.onInputChange} value={this.state.value} />
                        </p>
                        <p> {this.state.error && <p>{this.state.error}</p>}</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.onSubmit}>POST</a>
                    </div>
                </div>
            </div>
        )
    }
}