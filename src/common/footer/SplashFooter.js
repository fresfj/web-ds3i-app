import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const SplashFooter = () => {
    return (
        <footer className="footer-area splash-footer">
            <div className="container">
                <div className="footer-bottom">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="footer-copyright">
                            <span className="copyright-text">Desenvolvido com <img className="heart-icon" alt="Amor" src={process.env.PUBLIC_URL + "/images/icon/red-heart.svg"} /> pela equipe ds3i</span>
                                <span className="copyright-text">© {new Date().getFullYear()}. All rights reserved by <a href="https://ds3i.com.br/">DS3I - Desenvolvimento Inteligente</a></span>
                            </div>
                        </div>
                        <div className="col-lg-2">
                        <ul className="footer-social list-unstyled">
                            <li><a href="https://facebook.com/OficialDs3i/" target={'_blank'} title='DS3I - Facebook'><FaFacebookF /></a></li>
                            <li><a href="https://www.linkedin.com/company/ds3i/" target={'_blank'} title='DS3I - Linkedin'><FaLinkedinIn /></a></li>
                            <li><a href="https://www.instagram.com/ds3i_/" target={'_blank'} title='DS3I - Instagram'><FaInstagram /></a></li>
                        </ul>
                        </div>
                        <div className="col-lg-5">
                        <div className="footer-bottom-link">
                            <ul className="list-unstyled">
                                <li><Link to={process.env.PUBLIC_URL + "/privacy-policy/"}>Política de Privacidade</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/terms-use/"}>Termos de Uso</Link></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default SplashFooter;