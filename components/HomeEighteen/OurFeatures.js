import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class OurFeaturesTwo extends Component {
    render() {
        return (
            <section className="features-area ptb-100">
                <div className="container">
                    <ReactWOW animation='fadeInLeft' delay='0.2s'>
                        <div className="section-title">
                            <span>PLATFORMS USED</span>
                            <h2>Driving Influence Through <b>Leading</b> Social Channels</h2>
                            <p>Find KOL across their favorite social platforms and engage their followers to drive real
                                 business impact
</p>
                        </div>
                    </ReactWOW>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <ReactWOW animation='fadeInUp' delay='0.1s'>
                                <div className="single-features">
                                    <div className="icon">
                                        <i className="icofont-edit"></i>
                                    </div>
                                    <h3>LinkedIn </h3>
                                    <p>Create engaging conversations in the most vibrant professional community & network. </p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <ReactWOW animation='fadeInUp' delay='0.2s'>
                                <div className="single-features active">
                                    <div className="icon">
                                        <i className="icofont-upload-alt"></i>
                                    </div>
                                    <h3>Market Strategy</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <ReactWOW animation='fadeInUp' delay='0.2s'>
                                <div className="single-features">
                                    <div className="icon">
                                        <i className="icofont-pie-chart"></i>
                                    </div>
                                    <h3>Business Growth</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurFeaturesTwo;