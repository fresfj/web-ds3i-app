import React from 'react';
import loadable from '@loadable/component'
import SEO from '../common/SEO';
import SectionTitle from '../elements/section-title/SectionTitle';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import LazyLoad from 'react-lazyload';
import Image from 'react-image-webp';
import { motion } from "framer-motion/dist/framer-motion"
import { useTranslation } from 'react-i18next';

const HeaderOne = loadable(() => import('../common/header/HeaderOne'))
const FooterOne = loadable(() => import('../common/footer/FooterOne'))
const AboutOne = loadable(() => import('../component/about/AboutOne'))
const BannerOne = loadable(() => import('../component/banner/BannerOne'))
const ServicePropOne = loadable(() => import('../component/service/ServicePropOne'))
const ProjectFour = loadable(() => import('../component/project/ProjectFour'))
const TestimonialOne = loadable(() => import('../component/testimonial/TestimonialOne'))
const BrandOne = loadable(() => import('../component/brand/BrandOne'))
const CtaLayoutOne = loadable(() => import('../component/cta/CtaLayoutOne'))

const DigitalAgency = () => {
    const { t } = useTranslation();
    return (
        <>
        <SEO title="Desenvolvimento de sites e aplicativos"/>
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BannerOne />
            <LazyLoad height={200} offset={[-100, 0]} once >
            <div className="section section-padding-2 bg-color-dark">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.4 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                    <SectionTitle 
                        subtitle={t('sectionServices.subtitle')}
                        title={t('sectionServices.title')}
                        description={t('sectionServices.description')}
                        textAlignment="heading-light-left"
                        textColor=""
                    />
                    </motion.div>
                    <section><ServicePropOne colSize="col-xl-4 col-md-6" serviceStyle="" itemShow="6" /></section>
                </div>
                <ul className="list-unstyled shape-group-10">
                    <li className="shape shape-1"><LazyLoad height={200}><Image width={850} height={187} webp={process.env.PUBLIC_URL + "/images/others/line-9.webp"} src={process.env.PUBLIC_URL + "/images/others/line-9.png"} alt="Circle" /></LazyLoad></li>
                    <li className="shape shape-2"><LazyLoad height={200}><Image width={124} height={445} webp={process.env.PUBLIC_URL + "/images/others/bubble-42.webp"} src={process.env.PUBLIC_URL + "/images/others/bubble-42.png"} alt="Circle" /></LazyLoad></li>
                    <li className="shape shape-3"><LazyLoad height={200}><Image width={32} height={32} webp={process.env.PUBLIC_URL + "/images/others/bubble-43.webp"} src={process.env.PUBLIC_URL + "/images/others/bubble-43.png"} alt="Circle" /></LazyLoad></li>
                </ul>
            </div>
            </LazyLoad>
            <LazyLoad height={200} offset={[-100, 0]} once ><AboutOne /></LazyLoad>
            <LazyLoad height={200} offset={[-100, 0]} once ><ProjectFour /></LazyLoad>
            <LazyLoad height={200} offset={[-100, 0]} once ><TestimonialOne /></LazyLoad>
            <LazyLoad height={200} offset={[-100, 0]} once ><BrandOne /></LazyLoad>
            <LazyLoad height={200} offset={[-100, 0]} once ><CtaLayoutOne /></LazyLoad>
            <LazyLoad height={200} offset={[-100, 0]} once ><FooterOne parentClass="" /></LazyLoad>
        </main>
        </>
    )
}

export default DigitalAgency;

