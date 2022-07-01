import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <li><Link to={process.env.PUBLIC_URL + "/o-que-fazemos/"}>O que fazemos?</Link></li>
                <li><Link to={process.env.PUBLIC_URL + "/quem-somos/"}>Quem somos?</Link></li>
                <li><Link to={process.env.PUBLIC_URL + "/projetos-entregues/"}>Projetos</Link></li>
                <li><Link to={process.env.PUBLIC_URL + "/contato/"}>Contato</Link></li>
                <li className="d-block d-lg-none"><Link to={process.env.PUBLIC_URL + "/quanto-custa-um-aplicativo/"}>Quanto custa um aplicativo?</Link></li>
                <li className="d-block d-lg-none"><Link to={process.env.PUBLIC_URL + "/orcamento/"}>Orçamento</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;