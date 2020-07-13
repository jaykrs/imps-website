import React, { Component } from 'react';

class OurFeatures extends Component {
    render() {
        return (
            <section className="features-area ptb-100 bg-image">
                <div className="container">
                    <div className="section-title">
                        <span>PLATFORMS USED</span>
                        <h2>Driving Influence Through <b>Leading</b> Social Channels</h2>
                        <p>Find KOL across their favorite social platforms and engage their followers to drive real
                                 business impact.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <i className="icofont-edit"></i>
                                </div>
                                <h3>LinkedIn </h3>
                                <p>Create engaging conversations in the most vibrant professional community & network.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features active">
                                <div className="icon">
                                    <i className="icofont-upload-alt"></i>
                                </div>
                                <h3>Twitter</h3>
                                <p>Build news-worthy content with the help of our KOLs to get that required share of voice with authority. </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-features">
                                <div className="icon">
                                    <i className="icofont-pie-chart"></i>
                                </div>
                                <h3>Personal Blog </h3>
                                <p>Drive thought leadership through long format content through personal blogging platforms.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurFeatures;