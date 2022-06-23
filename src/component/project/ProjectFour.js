import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import ProjectPropTwo from './itemProp/ProjectPropTwo';
import ProjectData from "../../data/project/ProjectData.json";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Image from 'react-image-webp';
import LazyLoad from 'react-lazyload';
import Tilty from 'react-tilty';
const portfolioData = ProjectData;

const ProjectFour = () => {
    return (
        <div className="section section-padding-equal bg-color-dark">
            <div className="container">
            <SectionTitle 
                subtitle="Projetos"
                title="Projetos entregues"
                description="Conheça alguns projetos desenvolvidos pela nossa equipe."
                textAlignment="heading-light-left mb--90"
                textColor=""
            />
            <div className="project-add-banner banner-elux">
                <div className="content">
                    <div className="brand-logo mb-4">
                    <LazyLoad height={200}><img src={process.env.PUBLIC_URL + "/images/project/EletroIcon.svg"} width={80} height={80} alt="Elux" /></LazyLoad>
                    </div>
                    <h3 className="title mb-0 text-white">MY RH</h3>
                    <span className="subtitle fw-bolder">Financeiro, Aplicativo, Identidade Digital</span>
                    <p>O MY HR é um aplicativo exclusivo para funcionários, com a praticidade e segurança de acesso a suas informações como dados pessoais, funcionais, férias, controle de frequência e holerites.</p>
                    <Link className='d-inline-flex me-3 mb-3 px-3 py-2 fw-semibold text-white bg-dark bg-opacity-90 border border-dark border-opacity-10 rounded-3' to="https://facebook.com/"><FaApple className='mt-1 mx-1' /> App Store</Link>
                    <Link className='d-inline-flex mb-3 px-3 py-2 fw-semibold text-white bg-dark bg-opacity-90 border border-dark border-opacity-10 rounded-3' to="https://facebook.com/"><FaGooglePlay className='mt-1 mx-1' /> Google Play</Link>
                </div>
                <div className="thumbnail">
                <Tilty perspective={3000}>
                <LazyLoad height={200}><Image width={550} height={632} webp={process.env.PUBLIC_URL + "/images/project/EluxMockup.webp"} src={process.env.PUBLIC_URL + "/images/project/EluxMockup.png"} alt="Mockup" /></LazyLoad>
                </Tilty>
                </div>
            </div>
            <div className="project-add-banner banner-agro">
                <div className="content">
                    <div className="brand-logo mb-4">
                    <LazyLoad height={200}><img src={process.env.PUBLIC_URL + "/images/project/Agro.svg"} width={80} height={80} alt="Agro" /></LazyLoad>
                    </div>
                    <h3 className="title mb-0">General Agro</h3>
                    <span className="subtitle fw-bolder">E-commerce, Aplicativo, Identidade Digital</span>
                    <p>O General Agro é um aplicativo exclusivo de compra e venda para o produto de grão, sendo possível comercializar o seu produto com segurança e facilities.</p>
                    <Link className='d-inline-flex me-3 mb-3 px-3 py-2 fw-semibold text-white bg-dark bg-opacity-90 border border-dark border-opacity-10 rounded-3' to="https://facebook.com/"><FaApple className='mt-1 mx-1' /> App Store</Link>
                    <Link className='d-inline-flex mb-3 px-3 py-2 fw-semibold text-white bg-dark bg-opacity-90 border border-dark border-opacity-10 rounded-3' to="https://facebook.com/"><FaGooglePlay className='mt-1 mx-1' /> Google Play</Link>
                </div>
                <div className="thumbnail">
                    <Tilty perspective={3000}>
                    <LazyLoad height={200}><Image width={550} height={632} webp={process.env.PUBLIC_URL + "/images/project/Agro.webp"} src={process.env.PUBLIC_URL + "/images/project/Agro.png"} alt="Mockup" /></LazyLoad>
                    </Tilty>
                </div>
            </div>
            <div className="row row-45">
                {portfolioData.slice(12, 16).map((data) => (
                    <div className="col-md-6" key={data.id}>
                        <ProjectPropTwo projectStyle="project-style-2" portfolio={data}/>
                    </div>
                ))}

            </div>
            <div className="more-project-btn">
                <Link to={process.env.PUBLIC_URL + "/projetos-entregues/"} className="axil-btn btn-fill-white">Veja mais projetos</Link>
            </div>
        </div>
    </div>
    )
}

export default ProjectFour;