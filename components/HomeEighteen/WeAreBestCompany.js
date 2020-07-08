import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class WeAreBestCompany extends Component {
    render() {
        return (
            <div className="call-to-action ptb-100">
                <div className="container">
                    <div className="call-to-action-content">
                        <ReactWOW animation='fadeInUp' delay='0.1s'>
                            <div className="section-title">
                                <span>We are a Best Company</span>
                                <h2>Ready to <b>Work</b> With Us</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <Link href="#contact">
                                    <a className="btn btn-primary">Contact Us</a>
                                </Link>
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeAreBestCompany;