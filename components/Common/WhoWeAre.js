import React, { Component } from 'react';
import Link from 'next/link';

class WhoWeAre extends Component {
    render() {
        return (
            <section id="who-we-are" className="who-we-are ptb-100 bg-image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="section-title">
                                <span>Who We Are NOT</span>
                                <h2>Not Your Regular Influencer Marketing Platform  </h2>
                                <p1> We are not the ones who will distribute your readymade content.</p1>
                            </div>
                                <Link href="#portfolio">
                                    <a className="btn btn-primary">Get In Touch</a>
                                </Link>
                            
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="content">
                                <p>We strongly believe that Influencer Marketing is never ‘Done’ because it is a continuous process. Our KOLs will not only drive business impact but also help you cut through the usual content clutter. We start at an early stage in your marketing program with you, to get you the desired business objectives.</p>

                                <ul>
                                    <li>We are Opinion Makers </li>
                                    <li>We are passionate </li>
                                    <li>We are Business Catalysts</li>
                                    <li>We are Nimble </li>
                                    <li>We Challenge Status Quo</li>
                                    <li>We Improvise</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhoWeAre;