import React from 'react';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
const lngs = {'en': { nativeName: 'English' }, 'pt-BR': { nativeName: 'Português (Brasil)' }};

const OffcanvasMenu = ({offcanvasShow, offcanvasHide}) => {
    const { t, i18n } = useTranslation();
    return (
        <Offcanvas show={offcanvasShow} onHide={offcanvasHide} placement="end" className="header-offcanvasmenu">
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
                <form action="#" className="side-nav-search-form">
                    <div className="form-group">
                        <input type="text" className="search-field" name="search-field" placeholder={t('Offmenu.search')} />
                        <button className="side-nav-search-btn"><i className="fas fa-search"></i></button>
                    </div>
                </form>
                <div className="row ">
                    <div className="col-lg-5 col-xl-6">
                        <ul className="main-navigation list-unstyled">
                            <li><Link to={process.env.PUBLIC_URL + "/orcamento/"}>{t('Offmenu.budget')}</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/quanto-custa-um-aplicativo/"}>{t('Offmenu.how_much')}</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/contato/"}>{t('Offmenu.contact')}</Link></li>
                        </ul>
                    </div>
                    {/* className="axil-btn btn-fill-primary btn-primary" */}
                    <div className="col-lg-7 col-xl-6">
                        <div className="contact-info-wrap">
                            <div className="contact-inner">
                                <h5 className="title">{t('Offmenu.change_language')}</h5>
                                <ul className="social-share list-unstyled mb-4">
                                    {Object.keys(lngs).map((lng) => (
                                        <li key={lng} className={`flag ${lng} ${i18n.resolvedLanguage === lng ? 'active' : ''}`} onClick={() => i18n.changeLanguage(lng)}>
                                           <span>{lngs[lng].nativeName}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="contact-inner">
                                <address className="address">
                                    <span className="title">{t('Offmenu.contact_information')}</span>
                                    <p>Rua Eurides Maciel de Almeida<br /> Curitiba, Paraná</p>
                                </address>
                                <address className="address">
                                    <span className="title">{t('Offmenu.we_are_available')}</span>
                                    <a href="tel:+5541999601055" className="tel"><FaPhone /> (41) 99960-1055</a>
                                </address>
                            </div>
                            <div className="contact-inner">
                                <h5 className="title">{t('Offmenu.find_us')}</h5>
                                <div className="contact-social-share">
                                    <ul className="social-share list-unstyled">
                                        <li><a href="https://facebook.com/OficialDs3i/" target={'_blank'} title='DS3I - Facebook'><FaFacebookF /></a></li>
                                        <li><a href="https://twitter.com/OficialDs3i/" target={'_blank'} title='DS3I - Twitter'><FaTwitter /></a></li>
                                        <li><a href="https://www.linkedin.com/company/ds3i/" target={'_blank'} title='DS3I - Linkedin'><FaLinkedinIn /></a></li>
                                        <li><a href="https://www.instagram.com/ds3i_/" target={'_blank'} title='DS3I - Instagram'><FaInstagram /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default OffcanvasMenu;
