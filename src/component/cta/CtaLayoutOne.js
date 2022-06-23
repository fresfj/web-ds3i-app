import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import Image from 'react-image-webp';

const CtaLayoutOne = () => {

    return (

        <div className="section call-to-action-area">
            <div className="container">
                <div className="call-to-action">
                    <div className="section-heading heading-light">
                        <span className="subtitle">Vamos criar algo extraordinário juntos</span>
                        <h2 className="title">Peça um orçamento agora!</h2>
                        <Link to={process.env.PUBLIC_URL + "/orcamento/"} className="axil-btn btn-large btn-fill-white">
                            Comece agora o seu projeto
                        </Link>
                    </div>
                    <div className="thumbnail">
                        <div className="larg-thumb" data-sal="zoom-in" data-sal-duration="600" data-sal-delay="100">
                        <LazyLoad height={200}><Image className="paralax-image" width={366} height={226} webp={process.env.PUBLIC_URL + "/images/others/group-80.webp"} src={process.env.PUBLIC_URL + "/images/others/group-80.png"} alt="Chat" /></LazyLoad>
                        </div>
                        <ul className="list-unstyled small-thumb">
                            <li className="shape shape-1" data-sal="slide-right" data-sal-duration="800" data-sal-delay="400">
                            <LazyLoad height={200}><Image className="paralax-image" width={500} height={354} webp={process.env.PUBLIC_URL + "/images/others/group-83.webp"} src={process.env.PUBLIC_URL + "/images/others/group-83.png"} alt="Laptop" /></LazyLoad>
                            </li>
                            <li className="shape shape-2" data-sal="slide-left" data-sal-duration="800" data-sal-delay="300">
                            <LazyLoad height={200}><Image className="paralax-image" width={500} height={380} webp={process.env.PUBLIC_URL + "/images/others/group-84.webp"} src={process.env.PUBLIC_URL + "/images/others/group-84.png"} alt="Bill" /></LazyLoad>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul className="list-unstyled shape-group-9">
                <li className="shape shape-1"><LazyLoad height={200}><Image width={601} height={289} webp={process.env.PUBLIC_URL + "/images/others/bubble-12.webp"} src={process.env.PUBLIC_URL + "/images/others/bubble-12.png"} alt="Comments" /></LazyLoad></li>
                <li className="shape shape-2"><LazyLoad height={200}><Image width={24} height={24} webp={process.env.PUBLIC_URL + "/images/others/bubble-16.webp"} src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"} alt="Comments" /></LazyLoad></li>
                <li className="shape shape-3"><LazyLoad height={200}><Image width={75} height={75} webp={process.env.PUBLIC_URL + "/images/others/bubble-13.webp"} src={process.env.PUBLIC_URL + "/images/others/bubble-13.png"} alt="Comments" /></LazyLoad></li>
                <li className="shape shape-4"><LazyLoad height={200}><Image width={80} height={80} webp={process.env.PUBLIC_URL + "/images/others/bubble-14.webp"} src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Comments" /></LazyLoad></li>
                <li className="shape shape-5"><LazyLoad height={200}><Image width={24} height={24} webp={process.env.PUBLIC_URL + "/images/others/bubble-16.webp"} src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"} alt="Comments" /></LazyLoad></li>
                <li className="shape shape-6"><LazyLoad height={200}><Image width={140} height={140} webp={process.env.PUBLIC_URL + "/images/others/bubble-15.webp"} src={process.env.PUBLIC_URL + "/images/others/bubble-15.png"} alt="Comments" /></LazyLoad></li>
                <li className="shape shape-7"><LazyLoad height={200}><Image width={24} height={24} webp={process.env.PUBLIC_URL + "/images/others/bubble-16.webp"} src={process.env.PUBLIC_URL + "/images/others/bubble-16.png"} alt="Comments" /></LazyLoad></li>
            </ul>
        </div>
    )

}

export default CtaLayoutOne;