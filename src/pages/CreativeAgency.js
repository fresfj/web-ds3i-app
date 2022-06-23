import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderTwo from '../common/header/HeaderTwo';
import SEO from '../common/SEO';
import BannerTwo from '../component/banner/BannerTwo';
import BlogOne from '../component/blog/BlogOne';
import BrandOne from '../component/brand/BrandOne';
import CounterUpOne from '../component/counterup/CounterUpOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectOne from '../component/project/ProjectOne';
import ServicePropOne from '../component/service/ServicePropOne';
import TestimonialOne from '../component/testimonial/TestimonialOne';
import SectionTitle from '../elements/section-title/SectionTitle';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import LazyLoad from 'react-lazyload';

const CreativeAgency = () => {

    return (
        <>
        <SEO title="Creative Agency"/>
        <ColorSwitcher />
        <main className="main-wrapper">
            <LazyLoad height={200} offset={[-100, 0]} once ><HeaderTwo /></LazyLoad>
            <LazyLoad height={200} offset={[-100, 0]} once ><BannerTwo /></LazyLoad>
            <LazyLoad height={200} offset={[-100, 0]} once >
                <div className="section section-padding">
                    <div className="container">
                    <SectionTitle 
                        subtitle="What We Can Do For You"
                        title="Services we can <br> help you with"
                        description=""
                        textAlignment="heading-left mb--20 mb_md--70"
                        textColor=""
                    />
                        <div className="row">
                            <ServicePropOne colSize="col-lg-4" serviceStyle="service-style-2" itemShow="3" marginTop="yes"/>
                        </div>
                    </div>
                    <ul className="shape-group-7 list-unstyled">
                        <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-2.png"} alt="circle" /></li>
                        <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} alt="Line" /></li>
                        <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Line" /></li>
                    </ul>

                </div>
            </LazyLoad>
            <LazyLoad height={200} offset={[-100, 0]} once ><ProjectOne parentClass="bg-color-light"/></LazyLoad>
            <LazyLoad height={200} offset={[-100, 0]} once><CounterUpOne /></LazyLoad>
            <LazyLoad height={200} offset={[-100, 0]} once><TestimonialOne /></LazyLoad>
            <LazyLoad height={200} offset={[-100, 0]} once ><BrandOne /></LazyLoad>
            <LazyLoad height={200} offset={[-100, 0]} once ><BlogOne /></LazyLoad>
            <LazyLoad height={200} offset={[-100, 0]} once ><CtaLayoutOne /></LazyLoad>
            <LazyLoad height={200} offset={[-100, 0]} once ><FooterOne parentClass="" /></LazyLoad>
        </main>
        </>
    )
}

export default CreativeAgency;

