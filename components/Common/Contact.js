import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section id="contact" className="contact-area ptb-100 bg-image">
                <div className="container">
                    <div className="section-title">
                        <span>Get In Touch</span>
                        <h2>Let's <b>Contact</b> Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info">
                                <i className="icofont-google-map"></i> 
                                <p>Exercisplan 4, 111 49 Stockholm, Sweden</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info">
                                <i className="icofont-envelope"></i> 
                                <p>infoziran@gmail.com</p>
                                <p>helloziran@gmail.com</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info">
                                <i className="icofont-phone"></i> 
                                <p>(+124) 412-1243465</p>
                                <p>(+124) 412-2445515</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info">
                                <i className="icofont-fax"></i> 
                                <p>617-241-60055</p>
                                <p>817-345-56756</p>
                            </div>
                        </div>
                    </div>
                 
                    <div className="contact-form">
                        <form id="contactForm">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Name" required />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Email Address" required />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="msg_subject" id="msg_subject" placeholder="Subject" required />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="phone_number" id="phone_number" className="form-control" placeholder="Phone Number" required />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea placeholder="Message" name="message" id="message" className="form-control" rows="6" required></textarea>
                                    </div>
                                </div>

                                <div className="col-md-12 text-center">
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;