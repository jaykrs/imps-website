import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section id="contact" className="contact-area ptb-100 bg-image">
                <div className="container">
                    <div className="section-title">

                        <span>Get In Touch </span>
                        <h2>Let's <b>Create</b> Business Impact</h2>
                        <p className="text-light">We look forward to hearing from you. </p>

                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info">
                                <i className="icofont-google-map"></i>
                                <p>10 Anson Road, 10-11, International Plaza, Singapore</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info">
                                <i className="icofont-envelope"></i>
                                <p>sales@cinfluencer.com</p>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info">
                                <i className="icofont-phone"></i>
                                <p>+65 97240460</p>
                                <p>+91 98109 02095 (WA)</p>
                            </div>
                        </div>

                        {/* <div className="col-lg-3 col-md-6">
                            <div className="contact-info">
                                <i className="icofont-fax"></i> 
                                <p>A 12/3 Naraina Industrial Area 1, New Delhi, India</p>
                                
                            </div>
                        </div> */}
                    </div>

                    {/* <div className="contact-form">
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
                    </div> */}
                </div>
            </section>
        );
    }
}

export default Contact;