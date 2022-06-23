import React from 'react';
import Logo from '../../elements/logo/Logo';
import StickyHeader from './StickyHeader';
import { FaWhatsapp } from "react-icons/fa";

const SplashHeader = () => {

    const sticky = StickyHeader(100);

    return (
        <header className="header axil-header header-style-1 splash-header-style">
            <div className={`axil-mainmenu ${sticky ? "axil-sticky" : ""}`}>
                <div className="container">
                <div className="header-navbar">
                    <div className="header-logo">
                    <Logo limage="/images/logo/azul.svg"
                        dimage="/images/logo/branco.svg"
                        simage="/images/logo/azul.svg"
                    />
                    </div>
    
                    <div className="header-action">
                    <ul className="list-unstyled">
                        <li className="buy-btn">
                            <a href="https://wa.me/554199601055?text=Gostaria%20de%20de%20o%20um%20do%20orçamento" className="axil-btn btn-fill-primary">
                            <FaWhatsapp size={22} className="me-2" /> Chama no Whats</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </header>

    )
}

export default SplashHeader;