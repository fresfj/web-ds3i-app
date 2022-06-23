import React from 'react';
import Image from 'react-image-webp';
import SectionTitle from '../../elements/section-title/SectionTitle';
import BrandItem from './BrandItem';


const BrandOne = () => {
    return (
        <div className="section section-padding-2 bg-color-dark">
        <div className="container">
            <SectionTitle 
                subtitle="Empresas que confiam em nosso trabalho"
                title="Desenvolvemos soluções"
                description="Integração de sistemas de maneira nativa ou automatizada, desenvolvimento nativo para aplicativos e melhorias contínua de sistemas"
                textAlignment="heading-light-left"
                textColor=""
            />
            <div className='row'>
               <BrandItem />
            </div>
        </div>
        <ul className="list-unstyled shape-group-10">
            <li className="shape shape-1"><Image webp={process.env.PUBLIC_URL + "/images/others/line-9.webp"} src={process.env.PUBLIC_URL + "/images/others/line-9.png"} alt="Circle" /></li>
        </ul>
    </div>
    )
}

export default BrandOne;