import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import TestimonialPropOne from './TestimonialPropOne';
import LazyLoad from 'react-lazyload';
import Image from 'react-image-webp';
const TestimonialOne = () => {
    return (
        <div className="section section-padding">
            <div className="container">
                <SectionTitle 
                    subtitle="Depoimentos"
                    title="O que dizem nossos clientes"
                    description="Valorizamos e temos orgulho do relacionamento de confiança que desenvolvemos ao longo dos anos com nossos clientes. Venha você também para fazer parte desse portfólio vencedor."
                    textAlignment="heading-left"
                    textColor=""
                />
                <div className="row">
                    <TestimonialPropOne colSize="col-lg-4" itemShow="3"/>
                </div>
            </div>
            <ul className="shape-group-4 list-unstyled">
                <li className="shape-1">
                <LazyLoad height={88}><Image width={88} height={88} webp={process.env.PUBLIC_URL + "/images/others/bubble-1.webp"} src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Bubble" /></LazyLoad>
                </li>
            </ul>
        </div>
    )
}

export default TestimonialOne;