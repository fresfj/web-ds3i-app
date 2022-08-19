import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BiCalculator } from "react-icons/bi";
const Nav = () => {
    const { t } = useTranslation();
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <li><Link to={process.env.PUBLIC_URL + "/o-que-fazemos/"}>{t('menu.what_we_do')}</Link></li>
                <li><Link to={process.env.PUBLIC_URL + "/quem-somos/"}>{t('menu.who_we_are')}</Link></li>
                <li><Link to={process.env.PUBLIC_URL + "/projetos-entregues/"}>{t('menu.projects')}</Link></li>
                <li><Link to={process.env.PUBLIC_URL + "/contato/"}>{t('menu.contact')}</Link></li>
                <li className="d-block d-lg-none"><BiCalculator /> <Link to={process.env.PUBLIC_URL + "/quanto-custa-um-aplicativo/"}>{t('menu.how_much')}</Link></li>
                <li className="d-block d-lg-none"><Link to={process.env.PUBLIC_URL + "/orcamento/"}>{t('menu.budget')}</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;