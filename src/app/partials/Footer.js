import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import { Link } from "react-router-dom";


export const Footer = () => {
    return (
        <footer className="page-footer container">
            <div className="footer-copyright">
                <div className="container">
                    © 2018 Copyright Tamara &#38; Nemanja

                </div>
            </div>
        </footer>
    )
}