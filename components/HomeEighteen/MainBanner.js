import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import ReactWOW from 'react-wow';

class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <React.Fragment>
                <div id="home" className="main-banner item-bg1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="main-banner-content text-center">
                                    <ReactWOW animation='fadeInDown' delay='0.1s'>
                                        <span>We Are Creative</span>
                                    </ReactWOW>

                                    <ReactWOW animation='fadeInUp' delay='0.1s'>
                                        <h1>The Best <b>Digital</b> Experience</h1>
                                    </ReactWOW>

                                    <ReactWOW animation='fadeInDown' delay='0.1s'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </ReactWOW>

                                    <ReactWOW animation='fadeInUp' delay='0.1s'>
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
                                    </ReactWOW>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* Shape Images */}
                    <div className="shape1">
                        <img src={require("../../images/shapes/shape1.png")} alt="shape1" />
                    </div>
                    <div className="shape2 rotateme">
                        <img src={require("../../images/shapes/shape2.png")} alt="shape2" />
                    </div>
                    <div className="shape3 rotateme">
                        <img src={require("../../images/shapes/shape3.png")} alt="shape3" />
                    </div>
                    <div className="shape4">
                        <img src={require("../../images/shapes/shape4.png")} alt="shape4" />
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

export default MainBanner;