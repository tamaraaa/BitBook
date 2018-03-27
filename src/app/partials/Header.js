import React, { Component } from 'react';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="container">
            <nav>
                <div className="nav-wrapper">
                    <Link to="#" class="brand-logo">BITBOOK</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="./Feed">Feed</Link></li>
                        <li><Link to="./People">People</Link></li>
                        <li><Link to="./Profile">Profile</Link></li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}