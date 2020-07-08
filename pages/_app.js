import '../assets/css/bootstrap.min.css';
import '../assets/css/animate.min.css';
import '../assets/css/icofont.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import "../node_modules/react-sweet-progress/lib/style.css";
import '../assets/css/style.css';
import '../assets/css/responsive.css';
// For RTL Version Style
// import '../assets/css/rtl.css';

import App from 'next/app';
import { DefaultSeo } from 'next-seo';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';

export default class MyApp extends App {
    static async getInitialProps ({ Component, ctx }) {
        return {
            pageProps: Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {}
        }
    }

    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    
    render () {
        const { Component, pageProps } = this.props

        return (
            <React.Fragment>
                <DefaultSeo
                    title="Ziran - React Next Multi-Purpose Landing Page Template"
                    description="Ziran - React Next Multi-Purpose Landing Page Template. This has been built with React, Next.js, Express.js, and ES6+"
                    openGraph={{
                        type: 'website',
                        locale: 'en_IE',
                        url: 'https://ziran-react.envytheme.com/',
                        site_name: 'Ziran - React Next Multi-Purpose Landing Page Template',
                    }}
                />

                <Component {...pageProps} />
                
                {/* Preloader */}
                <Loader loading={this.state.loading} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="150" delayInMs="15.50" />
            </React.Fragment>
        );
    }
}