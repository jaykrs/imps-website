import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

class MainBannerNineteen extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <React.Fragment>
                <div id="home" className="main-banner main-banner-with-form item-bg2">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="main-banner-content">
                                            <span>We Are Creative</span>
                                            <h1>The Best <b>Digital</b> Experience</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                            <div className="btn-box">
                                                <Link href="#contact">
                                                    <a className="btn btn-primary">Get Started</a>
                                                </Link>
                                                
                                                <span>or</span>

                                                <Link href="#play-video">
                                                    <a
                                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                                        className="video-btn popup-youtube"
                                                    > 
                                                        <i className="icofont-ui-play"></i> Watch Video
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 col-md-12 offset-lg-1 offset-md-0">
                                        <div className="banner-form">
                                            <form>
                                                <div className="form-group">
                                                    <label>Your Name</label>
                                                    <input type="text" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <label>Your Email</label>
                                                    <input type="email" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <label>Phone Number</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label>Problem</label>
                                                    <select className="form-control">
                                                        <option>A website</option>
                                                        <option>A landing page</option>
                                                        <option>An iPhone app</option>
                                                        <option>An Android app</option>
                                                    </select>
                                                </div>

                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary">Schedule Assessment</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </React.Fragment>
        );
    }
}

export default MainBannerNineteen;