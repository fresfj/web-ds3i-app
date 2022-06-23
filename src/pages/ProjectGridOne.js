import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectOne from '../component/project/ProjectOne';
import LazyLoad from 'react-lazyload';

const ProjectGridOne = () => {

    return (
        <>
        <SEO title="Projetos entregues" />
        <ColorSwitcher />
        <main className="main-wrapper">
            <LazyLoad height={200} offset={[-100, 0]} once ><HeaderOne /></LazyLoad>
            <BcrumbBannerOne 
                title="Projetos entregues"
                paragraph ="Buscamos o que é mais importante e ajudamos os usuários a encontrar o caminho em uma interface atraente.
                Conheça um pouco dos projetos que trabalhamos!"
                styleClass=""
                mainThumb="/images/banner/banner-thumb-1.png"
            />
            <LazyLoad height={200} offset={[-100, 0]} once ><ProjectOne /></LazyLoad>
            <LazyLoad height={200} offset={[-100, 0]} once ><CtaLayoutOne /></LazyLoad>
            <LazyLoad height={200} offset={[-100, 0]} once ><FooterOne parentClass="" /></LazyLoad>
        </main>
        </>
    )
}

export default ProjectGridOne;