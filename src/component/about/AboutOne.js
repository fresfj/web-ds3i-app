import React, { memo } from 'react';
import loadable from '@loadable/component'
import Image from 'react-image-webp';
import LazyLoad from 'react-lazyload';
import { AnimationOnScroll } from 'react-animation-on-scroll';
const FormOne = loadable(() => import('../contact/FormOne'))

const AboutOne = () => {
    return (
        <section className="section section-padding-equal bg-color-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                    <AnimationOnScroll animateIn="slideInLeft" duration={1} delay={300} animateOnce={true}>
                        <div className="about-us">
                            <div className="section-heading heading-left mb-0">
                                <span className="subtitle">Quem somos?</span>
                                <h2 className="title mb--40">Desenvolvedores de sistemas inteligentes</h2>
                                <p>Transformamos ideias em grandes produtos, combinando design minimalista com máxima usabilidade. Somos tão diretos quanto abertos e colaborativos.</p>
                                <p>Nossa equipe é a melhor porque nós amamos o que fazemos e entregamos produtos memorável.</p>
                            </div>
                        </div>
                    </AnimationOnScroll>
                    </div>

                    <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <AnimationOnScroll animateIn="zoomIn" duration={1} delay={300} animateOnce={true}>
                            <div className="contact-form-box">
                                <h3 className="title">Vamos conversar e transformar sua ideia em algo memorável.</h3>
                                <LazyLoad height={200} offset={[-100, 0]} once ><FormOne /></LazyLoad>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
            <ul className="shape-group-6 list-unstyled">
                <li className="shape shape-1"><LazyLoad height={200}><Image webp={process.env.PUBLIC_URL + "/images/others/bubble-7.webp"} src={process.env.PUBLIC_URL + "/images/others/bubble-7.png"} width={460} height={446} alt="Bubble" /></LazyLoad></li>
                <li className="shape shape-2"><LazyLoad height={200}><Image webp={process.env.PUBLIC_URL + "/images/others/line-4.webp"} src={process.env.PUBLIC_URL + "/images/others/line-4.png"} width={1682} height={445} alt="line" /></LazyLoad></li>
                <li className="shape shape-3"><LazyLoad height={200}><Image webp={process.env.PUBLIC_URL + "/images/others/line-5.webp"} src={process.env.PUBLIC_URL + "/images/others/line-5.png"} width={1883} height={498} alt="line" /></LazyLoad></li>
            </ul>
        </section>
    )
}

export default memo(AboutOne);