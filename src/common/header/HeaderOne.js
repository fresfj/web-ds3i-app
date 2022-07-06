import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../elements/logo/Logo';
import Nav from '../../common/header/Nav';
import OffcanvasMenu from './OffcanvasMenu';
import StickyHeader from './StickyHeader';
import SwitcherHeader from '../../elements/switcher/SwitcherHeader';
import MobileMenu from './MobileMenu';
import { useTranslation } from 'react-i18next';

const HeaderOne = () => {
    const { t } = useTranslation();
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const OffcanvasHandleClose = () => setShowOffcanvas(false);
    const OffcanvasHandleShow = () => setShowOffcanvas(true);

    const sticky = StickyHeader(100);

    const MobileMenuHandler = () => {
        document.querySelector('.mobilemenu-popup').classList.toggle("show");
        document.querySelector('body').classList.toggle("mobilemenu-show");

        var elements = document.querySelectorAll('.mobilemenu-popup .menu-item-has-children > a');
    
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.axil-submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
    }


    return (
        <>
            <header className="header axil-header header-style-1">
                <div className={`axil-mainmenu ${sticky ? "axil-sticky" : ""}`}>
                    <div className="container">
                        <div className="header-navbar">
                            <div className="header-logo">
                                <Logo limage="/images/logo/azul.svg"
                                dimage="/images/logo/branco.svg"
                                simage="/images/logo/azul.svg"
                                />
                            </div>
                            <div className="header-main-nav">
                                <Nav />
                            </div>
                            <div className="header-action">
                    
                    </div>
                            <div className="header-action">
                                <ul className="list-unstyled">
                                    <li className="buy-btn mainmenu-nav">
                                        <Link to={process.env.PUBLIC_URL + "/quanto-custa-um-aplicativo/"} className="axil-btn btn-fill-primary">
                                        {t('menu.how_much')}
                                        </Link>
                                    </li>
                                    <li className="sidemenu-btn d-lg-block d-none">
                                        <button className="btn-wrap" onClick={OffcanvasHandleShow}>
                                            <i className="visually-hidden">Menu</i>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </li>
                                    <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                                        <button className="btn-wrap" onClick={MobileMenuHandler}>
                                            <i className="visually-hidden">Menu</i>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </li>
                                    <li className="my_switcher d-block d-lg-none">
                                        <SwitcherHeader />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <OffcanvasMenu offcanvasShow={showOffcanvas} offcanvasHide={OffcanvasHandleClose} />
            <MobileMenu MobileHandler={MobileMenuHandler}/>
        </>
    )
}

export default memo(HeaderOne);