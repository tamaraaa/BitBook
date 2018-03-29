import React, { Component } from 'react';
import M from "materialize-css"
import options from "materialize-css"
export class VideoModal extends Component {
    componentDidMount(){
        var elem = document.querySelector('.modal');
        var instance = M.Modal.init(elem, options);
    }

    render() {
        return(
            <div>
                <div id="modal1" class="modal">
                    <div class="modal-content">
                        <h4>New video post</h4>
                        <p>
                            <input type="text"/>
                        </p>
                    </div>
                    <div class="modal-footer">
                        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">POST</a>
                    </div>
                </div>
            </div>
        )
    }
}