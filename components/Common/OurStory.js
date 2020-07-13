import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import Link from 'next/link';

class OurStory extends Component {
    
    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <React.Fragment>
                <div className="story-area ptb-100">
                    <div className="container">
                        {/* <div className="story-content">
                            <div className="section-title">
                                <span>Our Story</span>
                                <h2>We are always with you to <b>make</b> your project Success</h2>

                                <Link href="#play-video">
                                    <a
                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                        className="video-btn popup-youtube"
                                    > 
                                        <i className="icofont-ui-play"></i>
                                    </a>
                                </Link>
                            </div>
                        </div> */}
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

export default OurStory;