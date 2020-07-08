import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class AboutUsTwo extends Component {
    render() {
        return (
            <section id="about" className="about-area ptb-100 bg-image2 overx-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="row about-image">
                                <div className="col-6 col-lg-6 col-md-6">
                                    <ReactWOW animation='fadeInLeft'>
                                        <div className="image">
                                            <img src={require("../../images/about-img1.jpg")} alt="about" />
                                        </div>
                                    </ReactWOW>
                                </div>

                                <div className="col-6 col-lg-6 col-md-6">
                                    <ReactWOW animation='fadeInLeft'>
                                        <div className="image">
                                            <img src={require("../../images/about-img2.jpg")} alt="about" />
                                        </div>
                                    </ReactWOW>
                                </div>

                                <div className="col-6 col-lg-6 col-md-6">
                                    <ReactWOW animation='fadeInLeft'>
                                        <div className="image mt-30">
                                            <img src={require("../../images/about-img3.jpg")} alt="about" />
                                        </div>
                                    </ReactWOW>
                                </div>

                                <div className="col-6 col-lg-6 col-md-6">
                                    <ReactWOW animation='fadeInLeft'>
                                        <div className="image mt-30">
                                            <img src={require("../../images/about-img4.jpg")} alt="about" />
                                        </div>
                                    </ReactWOW>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <ReactWOW animation='fadeInRight'>
                                    <span>About Ziran</span>
                                </ReactWOW>

                                <ReactWOW animation='fadeInRight'>
                                    <h2>We Are Digital <b>Marketing</b> & Branding</h2>
                                </ReactWOW>

                                <ReactWOW animation='fadeInRight'>
                                    <p>We are an experienced and talented team of passionate consultants who live and breathe search engine marketing</p>
                                </ReactWOW>
 
                                <ReactWOW animation='fadeInRight'>
                                    <ul>
                                        <li>Creative Design</li>
                                        <li>Modern Design</li>
                                        <li>Retina Ready</li>
                                        <li>Awesome Design</li>
                                        <li>Responsive Design</li>
                                    </ul>
                                </ReactWOW>

                                <ReactWOW animation='fadeInRight'>
                                    <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation, and communications requirements. We work with you, not for you. Although we have great resources.</p>
                                </ReactWOW>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUsTwo;