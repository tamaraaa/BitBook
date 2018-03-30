import React, { Component } from 'react';

import M from "materialize-css"
import options from "materialize-css"
export class ImgModal extends Component {
    componentDidMount() {
        var elem = document.querySelector('#imageModal');
        var instance = M.Modal.init(elem, options);
    }

    render() {
        return (
            <div>
                <div id="imageModal" className="modal">
                    <div className="modal-content">
                        <h4>New image post</h4>
                        <p>
                            <input type="text" />
                        </p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">POST</a>
                    </div>
                </div>
            </div>
        )
    }
}