import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(
    () => import('react-modal-video'),
    {ssr: false}
);
const ReactTypingEffect = dynamic(
    () => import('react-typing-effect'),
    {ssr: false}
);

class MainBannerFive extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }
 
    render() {
        return (
            <React.Fragment>
                <div id="home" className="main-banner text-animation-home item-bg4">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="main-banner-content text-center">
                                    <span>The Best Experience</span>
                                    <h1>
                                        We Are 
                                        <ReactTypingEffect
                                            text={['Professional.', 'Passionate.', 'Creative.', 'Designer.', 'Unique.', 'Best.', 'Support.']}
                                            speed={200}
                                            eraseDelay={100} 
                                            className="typewrite"
                                        />
                                    </h1>
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

export default MainBannerFive;