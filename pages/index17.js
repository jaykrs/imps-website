import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBannerSeventeen from '../components/PageBanners/MainBannerSeventeen';
import OurFeatures from '../components/Common/OurFeatures';
import AboutUs from '../components/Common/AboutUs';
import CtaArea from '../components/Common/CtaArea';
import OurServices from '../components/Common/OurServices';
import WhoWeAre from '../components/Common/WhoWeAre';
import SkillsArea from '../components/Common/SkillsArea';
import WhyWeDifferent from '../components/Common/WhyWeDifferent';
import OurPortfolio from '../components/Common/OurPortfolio';
import FunFacts from '../components/Common/FunFacts';
import Team from '../components/Common/Team';
import OurStory from '../components/Common/OurStory';
import Pricing from '../components/Common/Pricing';
import OurTestimonials from '../components/Common/OurTestimonials';
import WeAreBestCompany from '../components/Common/WeAreBestCompany';
import Faq from '../components/Common/Faq';
import BlogSlider from '../components/Common/BlogSlider';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Partner from '../components/Common/Partner';
import Subscribe from '../components/Common/Subscribe';
import Contact from '../components/Common/Contact';
import Footer from '../components/Layouts/Footer';

class Index17 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar /> 
                <MainBannerSeventeen />
                <OurFeatures />
                <AboutUs />
                <CtaArea />
                <OurServices />
                <WhoWeAre /> 
                <SkillsArea />
                <WhyWeDifferent />
                <OurPortfolio />
                <FunFacts /> 
                <Team /> 
                <OurStory /> 
                <Pricing /> 
                <OurTestimonials />
                <WeAreBestCompany />
                <Faq /> 
                <BlogSlider /> 
                <CtaAreaTwo /> 
                <Partner /> 
                <Subscribe />
                <Contact />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index17;