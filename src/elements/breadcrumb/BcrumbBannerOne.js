import React from 'react';
import Tilty from 'react-tilty';
import { AnimationOnScroll } from 'react-animation-on-scroll';
const BcrumbBannerOne = ({title, paragraph, styleClass, mainThumb}) => {
    return (
        <div className="breadcrum-area breadcrumb-banner">
            <div className="container">
                <div className="section-heading heading-left">
                    <AnimationOnScroll  animateIn="fadeIn" duration={1} delay={200} animateOnce={true}>
                        <h1 className="title h2" dangerouslySetInnerHTML={{__html: title}}></h1>
                    </AnimationOnScroll>
                    <AnimationOnScroll  animateIn="fadeInUp" duration={1} delay={300} animateOnce={true}>
                        <p dangerouslySetInnerHTML={{__html: paragraph}}></p>
                    </AnimationOnScroll>
                </div>
                <div className={`banner-thumbnail ${styleClass}`}>
                    <Tilty perspective={2000} reset={false}>
                        <img src={process.env.PUBLIC_URL + mainThumb} alt="Illustration" />
                    </Tilty>
                </div>
            </div>
            <ul className="shape-group-8 list-unstyled">
                <li className="shape shape-1">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-9.png"} alt="Bubble" />
                </li>
                <li className="shape shape-2">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-21.png"} alt="Bubble" />
                </li>
                <li className="shape shape-3">
                    <img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" />
                </li>
            </ul>
        </div>
    )
}

export default BcrumbBannerOne;