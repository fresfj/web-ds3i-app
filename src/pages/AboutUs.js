import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import ProcessOne from '../component/process/ProcessOne';
import AboutThree from '../component/about/AboutThree';
import AboutFour from '../component/about/AboutFour';
import AboutFive from '../component/about/AboutFive';
import LazyLoad from 'react-lazyload';

const AboutUs = () => {

    return (
        <>
        <SEO title="Quem somos?" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <LazyLoad height={200} offset={[-100, 0]} once ><HeaderOne /></LazyLoad>
                <BcrumbBannerOne 
                title="Somos desenvolvedores de soluções"
                paragraph ="Transformamos ideias em grandes produtos, combinando design minimalista com máxima usabilidade."
                styleClass="thumbnail-4"
                mainThumb="/images/banner/banner-thumb-5.png"
                />
                <LazyLoad height={200} offset={[-100, 0]} once ><AboutFour /></LazyLoad>
                <LazyLoad height={200} offset={[-100, 0]} once ><AboutThree /></LazyLoad>
                <LazyLoad height={200} offset={[-100, 0]} once ><AboutFive /></LazyLoad>
                <LazyLoad height={200} offset={[-100, 0]} once ><ProcessOne /></LazyLoad>
                <LazyLoad height={200} offset={[-100, 0]} once ><CtaLayoutOne /></LazyLoad>
                <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default AboutUs;