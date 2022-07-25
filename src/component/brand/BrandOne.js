import React from 'react';
import Image from 'react-image-webp';
import SectionTitle from '../../elements/section-title/SectionTitle';
import BrandItem from './BrandItem';
import { useTranslation } from 'react-i18next';

const BrandOne = () => {
    const { t } = useTranslation();
    return (
        <div className="section section-padding-2 bg-color-dark">
        <div className="container">
            <SectionTitle 
                subtitle={t('sectionBrand.subtitle')}
                title={t('sectionBrand.title')}
                description={t('sectionBrand.description')}
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