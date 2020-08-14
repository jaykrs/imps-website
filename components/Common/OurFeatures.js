import React, { Component } from 'react';

class OurFeatures extends Component {
    render() {
        return (
            <section className="features-area ptb-100 bg-image">
                <div className="container">
                    <div className="section-title">
                        <span>World-Class Minds</span>
                        <h2>Engage our CXOs to fuel your   <b>company</b> growth</h2>
                        {/* <p>Find KOL across their favorite social platforms and engage their followers to drive real
                                 business impact.</p> */}
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <i className="icofont-edit"></i>
                                </div>
                                <h3>Strategic Guidance </h3>
                                <p>Our CXOs are here to guide you to face new business challenges.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features active">
                                <div className="icon">
                                    <i className="icofont-upload-alt"></i>
                                </div>
                                <h3>Action, not Words</h3>
                                <p>Execution Supervision by our experts ensures that you meet defined objectives.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-features">
                                <div className="icon">
                                    <i className="icofont-pie-chart"></i>
                                </div>
                                <h3>Influence</h3>
                                <p>Use thought leadership of our experts to build your share of impact.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurFeatures;