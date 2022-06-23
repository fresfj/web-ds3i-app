import React from 'react';
import loadable from '@loadable/component'
import SEO from '../common/SEO';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import LazyLoad from 'react-lazyload';

const FormBudget = loadable(() => import('../component/budget/FormBudget'));
const Budget = () => {
    return (
        <>
            <SEO title="Orçamento para Aplicativos e Sites" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <LazyLoad height={200} offset={[-100, 0]} once ><HeaderOne /></LazyLoad>
                <LazyLoad height={200} offset={[-100, 0]} once ><BreadCrumbOne title="Orçamento" page="Orçamento"/></LazyLoad>
            <div className="section section-padding section-heading heading-left">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="contact-form-box shadow-box mb--30">
                                <h2 className="title">Olá! Vamos conversar?</h2>
                                <h2 className="subtitle">Você tem uma ideia mas não sabe por onde começar? Preencha os campos abaixo, ou se preferir nos chame no Whats</h2>
                                <LazyLoad height={200} offset={[-100, 0]} once ><FormBudget /></LazyLoad>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="list-unstyled shape-group-12">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} alt="Bubble" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Bubble" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/circle-3.png"} alt="Circle" /></li>
                </ul>
            </div>
            <LazyLoad height={200} offset={[-100, 0]} once ><FooterOne parentClass="pt--150 pt_lg--100 pt_md--80 pt_sm--60" /></LazyLoad>
            </main>
        </>
    )
}

export default Budget;