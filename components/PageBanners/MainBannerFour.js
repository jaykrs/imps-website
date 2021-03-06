import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(
    () => import('react-modal-video'),
    {ssr: false}
);
const WaterWave = dynamic(
    () => import('react-water-wave'),
    {ssr: false}
);
import image from '../../images/main-banner3.jpg';


class MainBannerFour extends Component {
    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <React.Fragment>
                <WaterWave 
                    style={{ width: '100%', height: '100%', backgroundSize: 'cover' }}
                    imageUrl={image}>
                    {() => (
                        <div id="home" className="main-banner">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="main-banner-content text-center">
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
                    )}
                </WaterWave>
 
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

export default MainBannerFour;