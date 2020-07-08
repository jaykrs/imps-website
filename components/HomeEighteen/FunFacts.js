import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class FunFacts extends Component {
    render() {
        return (
            <div className="funfacts-area-two ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <ReactWOW animation='fadeInUp' delay='0.1s'>
                                <div className="single-funfact">
                                    <i className="icofont-checked"></i>
                                    <h3>820</h3>
                                    <p>Successful Projects</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-3 col-md-3">
                            <ReactWOW animation='fadeInUp' delay='0.2s'>
                                <div className="single-funfact">
                                    <i className="icofont-ui-user"></i>
                                    <h3>6523</h3>
                                    <p>Satisfied Customers</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-3 col-md-3">
                            <ReactWOW animation='fadeInUp' delay='0.3s'>
                                <div className="single-funfact">
                                    <i className="icofont-win-trophy"></i>
                                    <h3>50</h3>
                                    <p>Awards Winning</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-3 col-md-3">
                            <ReactWOW animation='fadeInUp' delay='0.4s'>
                                <div className="single-funfact">
                                    <i className="icofont-crown-king"></i>
                                    <h3>20</h3>
                                    <p>Year Of Experience</p>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FunFacts;