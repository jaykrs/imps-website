import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class CtaAreaTwo extends Component {
    render() {
        return (
            <div className="cta-area overx-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8">
                            <ReactWOW animation='fadeInLeft' delay='0.1s'>
                                {/* <div className="cta-content">
                                    <h3>Create lovely & smart <b>websites</b> faster!</h3>
                                    <span>Start to build your awesome websites</span>
                                </div> */}
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-md-4 text-right">
                            <ReactWOW animation='fadeInRight' delay='0.1s'>
                                <Link href="#contact">
                                    <a className="btn btn-primary">Contact Us</a>
                                </Link>
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CtaAreaTwo;