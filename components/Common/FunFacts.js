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
                                <span>Number Speaks</span>
                                <h2>Collective Wisdom of Our  <b>KOLs</b></h2>
                                <p>You are always in a great company when planning your next marketing campaign. </p>

                                <Link href="#">
                                    <a className="btn btn-primary">Get In Touch</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="counter-wrap">
                                <div className="single-counter">
                                    <h2>50+</h2>
                                    <h3>Business Thought Leaders </h3>
                                    <p>          Coming from varied industry backgrounds,our experts are there to help. </p>
                                </div>

                                <div className="single-counter">
                                    <h2>1250+</h2>
                                    <h3>Years of Collective Work Experience</h3>
                                    <p>With work experience of 15+ years,our thought leaders are perfect catalysts of change</p>
                                </div>

                                <div className="single-counter">
                                    <h2>250+</h2>
                                    <h3>Content Pieces Generated</h3>
                                    <p>Content Pieces Generated
          We are super proud to have curated some great thought pieces with our expert's help</p>
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