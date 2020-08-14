import React, { Component } from 'react';
import Link from 'next/link';

class FunFacts extends Component {
    render() {
        return (
            <section className="funfacts-area ptb-100 bg-image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="section-title">
                                <span>Numbers Speaks</span>
                                <h2>Collective Wisdom of the Top <b>1%</b></h2>
                                <p>You are always in a great company of Global CXOs to plan your next business move. </p>

                                {/* <Link href="#">
                                    <a className="btn btn-primary">Get In Touch</a>
                                </Link> */}
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="counter-wrap">
                                <div className="single-counter">
                                    <h2>100+</h2>
                                    <h3>Business Leaders</h3>
                                    <p>          Coming from varied industry backgrounds,our experts are there to help. </p>
                                </div>

                                <div className="single-counter">
                                    <h2>1500+   </h2>
                                    <h3>Years of Learning & Experience</h3>
                                    <p>Leverage the vast experience of our CXO network for your business growth</p>
                                </div>

                                <div className="single-counter">
                                    <h2>15+</h2>
                                    <h3>C-Suite Titles Covered</h3>
                                    <p>From CEO, COO, CMO to CHRO, CPRO, we have them all on our platform for you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FunFacts;