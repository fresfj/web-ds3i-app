import React from 'react';
import { Link } from 'react-router-dom';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import { motion } from "framer-motion/dist/framer-motion"
const ErrorPage = () => {

    return (
        <>
        <SEO title="404 Not Found" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <div className="error-page onepage-screen-area">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.4 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="content">
                                <h1 className="title">Page not found</h1>
                                <h4 className="subtitle">Não se assuste.</h4>
                                <p>A página que você está procurando caiu em um reino desconhecido. Clique no botão abaixo para voltar à página inicial.</p>
                                <Link to={process.env.PUBLIC_URL + "/"} className="axil-btn btn-fill-primary">Voltar para o conhecido</Link>
                            </div>
                        </motion.div>
                        </div>
                        <div className="col-lg-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.4 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="thumbnail">
                                <img src={process.env.PUBLIC_URL + "/images/others/404.png"} alt="404" />
                            </div>
                        </motion.div>
                        </div>
                        </div>
                    </div>
                    <ul className="shape-group-8 list-unstyled">
                        <li className="shape shape-1">
                            <img src={process.env.PUBLIC_URL + "/images/others/bubble-9.png"} alt="Bubble" />
                        </li>
                        <li className="shape shape-2">
                            <img src={process.env.PUBLIC_URL + "/images/others/bubble-27.png"} alt="Bubble" />
                        </li>
                        <li className="shape shape-3">
                            <img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" />
                        </li>
                    </ul>
                </div>
            </main>
        </>
    )
}

export default ErrorPage;