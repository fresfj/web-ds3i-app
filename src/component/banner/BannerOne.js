import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';
import Image from 'react-image-webp';
import TextLoop from "react-text-loop";
import LazyLoad from 'react-lazyload';

const BannerOne = () => {
    return (
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
                                <div className={`inner`}>
                                    <h1 className="title">
                                        Soluções digitais:<br />
                                        <TextLoop springConfig={{ interval: 2000, stiffness: 180, damping: 8 }} className={'titleLoop'}>
                                            <span>Aplicativos.</span>
                                            <span>Sites.</span>
                                            <span>Loja Virtual.</span>
                                            <span>Sistemas.</span>
                                            <span>Integração.</span>
                                            <span>Inteligência Artificial.</span>
                                            <span>Interfaces.</span>
                                            <span>Designer.</span>
                                            <span>Infoprodutos.</span>
                                        </TextLoop>{" "}
                                    </h1>
                                </div>
                                <h2 className="subtitle">Desenvolvimento de soluções digitais para o seu negócio.</h2>
                                <Link to={process.env.PUBLIC_URL + "/contato/"} className="axil-btn btn-fill-primary btn-large">Vamos conversar</Link>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-thumbnail">
                            <AnimationOnScroll animateIn="zoomIn" duration={2} delay={300} animateOnce={true}>
                                <div className="large-thumb">
                                <LazyLoad height={200}><Image width={470} height={367} src={process.env.PUBLIC_URL + "/images/banner/window.png"} webp={process.env.PUBLIC_URL + "/images/banner/window.webp"} alt="Laptop" /></LazyLoad>
                                </div>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="slideInRight" duration={2} delay={300} animateOnce={true}>
                            <div className="large-thumb-2">
                            <LazyLoad height={200}><Image height={500} width={500} src={process.env.PUBLIC_URL + "/images/banner/woman.png"} webp={process.env.PUBLIC_URL + "/images/banner/woman.webp"} alt="Laptop" /></LazyLoad>
                            </div>
                            </AnimationOnScroll>
                            <ul className="list-unstyled shape-group">
                                <li className="shape shape-1">
                                    <AnimationOnScroll animateIn="slideInLeft" duration={1} delay={800} animateOnce={true}>
                                    <LazyLoad height={200}><Image width={112} height={172} src={process.env.PUBLIC_URL + "/images/banner/chat-group.png"} webp={process.env.PUBLIC_URL + "/images/banner/chat-group.webp"} alt="chat" /></LazyLoad>
                                    </AnimationOnScroll>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="list-unstyled shape-group-21">
                <li className="shape shape-1">
                <LazyLoad height={200}><Image width={500} height={212} webp={process.env.PUBLIC_URL + "/images/others/bubble-39.webp"} src={process.env.PUBLIC_URL + "/images/others/bubble-39.png"} alt="Bubble" /></LazyLoad>
                </li>
                <li className="shape shape-2">
                <LazyLoad height={200}><Image width={378} height={378} webp={process.env.PUBLIC_URL + "/images/others/bubble-38.webp"} src={process.env.PUBLIC_URL + "/images/others/bubble-38.png"} alt="Bubble" /></LazyLoad>
                </li>
                <li className="shape shape-3">
                <LazyLoad height={200}><Image width={53} height={53} webp={process.env.PUBLIC_URL + "/images/others/bubble-14.webp"} src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble" /></LazyLoad>
                </li>
                <li className="shape shape-4">
                <LazyLoad height={200}><Image width={20} height={20} webp={process.env.PUBLIC_URL + "/images/others/bubble-14.webp"} src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble" /></LazyLoad>
                </li>
                <li className="shape shape-5">
                <LazyLoad height={200}><Image width={20} height={20} webp={process.env.PUBLIC_URL + "/images/others/bubble-14.webp"} src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble" /></LazyLoad>
                </li>
                <li className="shape shape-6">
                <LazyLoad height={200}><Image width={20} height={20} webp={process.env.PUBLIC_URL + "/images/others/bubble-40.webp"} src={process.env.PUBLIC_URL + "/images/others/bubble-40.png"} alt="Bubble" /></LazyLoad>
                </li>
                <li className="shape shape-7">
                <LazyLoad height={200}><Image width={20} height={20} webp={process.env.PUBLIC_URL + "/images/others/bubble-41.webp"} src={process.env.PUBLIC_URL + "/images/others/bubble-41.png"} alt="Bubble" /></LazyLoad>
                </li>
            </ul>
        </div>
    )
}

export default BannerOne;