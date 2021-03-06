import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class CtaArea extends Component {
    render() {
        return (
            <div className="cta-area overx-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8">
                            <ReactWOW animation='fadeInLeft' delay='0.1s'>
                                {/* <div className="cta-content">
                                    <h3>Start to build your <b>awesome</b> websites</h3>
                                    <span>Create lovely & smart websites faster! Get Walrus now!</span>
                                </div> */}
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-md-4 text-right">
                            <ReactWOW animation='fadeInRight' delay='0.1s'>
                                <Link href="#contact">
                                    <a className="btn btn-primary">Start a Project</a>
                                </Link>
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CtaArea;