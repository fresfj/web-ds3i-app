import React from 'react'
import PropTypes from "prop-types";


const SEO = ( {title} ) => {
    return (
        <>
            <meta charSet="utf-8" />
            <title>{title} - DS3I</title>
            <meta name="robots" content="noindex, follow" />
            <meta name="author" content="Desenvolvimento de Aplicativos e Sites"/>
            <meta name="description" content="Empresa focada em desenvolvimento de aplicativos mobile. Referência em desenvolvimento Android e iOS. Confira aqui e saiba mais sobre a empresa e nossos projetos." />
            <meta name="keywords" content="ds3i, inteligente, design, desenvolvimento, programacao, site, app, aplicativo, ios, android, e-commerce, wordpress, nativo, startup" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="google-site-verification" content="3JZqC_yKbhW4iMDR8mXddSBENrpOebJ7i4qhOkYT6Ak" />
            <meta name="AdsBot-Google" content="noindex" />
            <meta name="googlebot" content="noindex" />
        </>
    )
}
SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;