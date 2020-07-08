import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeEighteen/MainBanner';
import OurFeatures from '../components/HomeEighteen/OurFeatures';
import AboutUs from '../components/HomeEighteen/AboutUs';
import CtaArea from '../components/HomeEighteen/CtaArea';
import OurServices from '../components/HomeEighteen/OurServices';
import WhoWeAre from '../components/HomeEighteen/WhoWeAre';
import SkillsArea from '../components/HomeEighteen/SkillsArea';
import WhyWeDifferent from '../components/HomeEighteen/WhyWeDifferent';
import OurPortfolio from '../components/HomeEighteen/OurPortfolio';
import FunFacts from '../components/HomeEighteen/FunFacts';
import Team from '../components/HomeEighteen/Team';
import OurStory from '../components/HomeEighteen/OurStory';
import Pricing from '../components/HomeEighteen/Pricing';
import OurTestimonials from '../components/HomeEighteen/OurTestimonials';
import WeAreBestCompany from '../components/HomeEighteen/WeAreBestCompany';
import Faq from '../components/HomeEighteen/Faq';
import BlogSlider from '../components/HomeEighteen/BlogSlider';
import CtaAreaTwo from '../components/HomeEighteen/CtaAreaTwo';
import Partner from '../components/HomeEighteen/Partner';
import Subscribe from '../components/HomeEighteen/Subscribe';
import Contact from '../components/HomeEighteen/Contact';
import Footer from '../components/Layouts/Footer';

class Index18 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar /> 
                <MainBanner />
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

export default Index18;