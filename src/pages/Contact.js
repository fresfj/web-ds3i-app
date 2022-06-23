import React from 'react';
import loadable from '@loadable/component'
import SEO from '../common/SEO';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import SectionTitle from '../elements/section-title/SectionTitle';
import ContactLocation from '../component/contact/ContactLocation';
import LazyLoad from 'react-lazyload';
const FormTwo = loadable(() => import('../component/contact/FormTwo'));
const Contact = () => {
    return (
        <>
            <SEO title="Desenvolvimento de Aplicativos e Sites" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <LazyLoad height={200} offset={[-100, 0]} once ><HeaderOne /></LazyLoad>
                <BreadCrumbOne 
                    title="Contato"
                    page="Contato"
                />
            <LazyLoad height={200} offset={[-100, 0]} once >
            <div className="section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="contact-form-box shadow-box mb--30">
                                <h3 className="title">Vamos criar algo extraordinário juntos</h3>
                                <LazyLoad height={200} offset={[-100, 0]} once ><FormTwo /></LazyLoad>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 offset-xl-1">
                            <div className="contact-info mb--100 mb_md--30 mt_md--0 mt--150">
                                <h4 className="title">Telefone</h4>
                                <p>Nosso atendimento ao cliente está aberto de segunda a sexta, das 09h às 18h</p>
                                <h4 className="phone-number"><a href="tel:+5541999601055">(41) 99960 1055</a></h4>
                            </div>
                            <div className="contact-info mb--30">
                                <h4 className="title">Email</h4>
                                <p>Nossa equipe de suporte retornará em 48 horas durante o horário comercial padrão.</p>
                                <h4 className="phone-number"><a href="mailto:suporte@ds3i.com.br">suporte@ds3i.com.br</a></h4>
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
            </LazyLoad>
            <div className="section section-padding bg-color-dark overflow-hidden">
                <div className="container">
                    <SectionTitle 
                        subtitle="Aonde estamos"
                        title="Nossos escritórios"
                        description=""
                        textAlignment="heading-light-left"
                        textColor=""
                    />
                    <div className="row">
                        <ContactLocation />
                    </div>
                </div>
                <ul className="shape-group-11 list-unstyled">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-6.png"} alt="line" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/circle-3.png"} alt="line" /></li>
                </ul>
            </div>
            <LazyLoad height={200} offset={[-100, 0]} once ><FooterOne parentClass="pt--150 pt_lg--100 pt_md--80 pt_sm--60" /></LazyLoad>
            </main>
        </>
    )
}

export default Contact;