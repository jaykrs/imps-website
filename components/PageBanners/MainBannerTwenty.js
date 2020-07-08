import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

class MainBannerTwenty extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }
    
    render() {
        return (
            <React.Fragment>
                <div id="home" className="main-banner main-banner-with-form item-bg8">
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
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-12">
                                        <div className="banner-video">
                                            <img src={require("../../images/services/service6.jpg")} alt="Service" />

                                            <Link href="#play-video">
                                                <a
                                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                                    className="video-btn popup-youtube"
                                                > 
                                                    <i className="icofont-ui-play"></i>
                                                </a>
                                            </Link>
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

export default MainBannerTwenty;