import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaDribbble } from "react-icons/fa";


const SplashFooter = () => {
    return (
        <footer className="footer-area splash-footer">
            <div className="container">
                <div className="footer-bottom">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="footer-copyright">
                            Desenvolvido com <img className="heart-icon" alt="Amor" src="https://code-assets-0.whjr.online/images/icons/red-heart.svg" /> por equipe DS3I
                                <span className="copyright-text">© {new Date().getFullYear()}. All rights reserved by <a href="https://ds3i.com.br/">DS3I - Desenvolvimento Inteligente</a></span>
                            </div>
                        </div>
                        <div className="col-lg-2">
                        <ul className="footer-social list-unstyled">
                            <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                            <li><a href="https://dribbble.com/"><FaDribbble /></a></li>
                        </ul>
                        </div>
                        <div className="col-lg-5">
                        <div className="footer-bottom-link">
                            <ul className="list-unstyled">
                                <li><Link to={process.env.PUBLIC_URL + "/privacy-policy"}>Política de Privacidade</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/terms-use"}>Termos de Uso</Link></li>
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