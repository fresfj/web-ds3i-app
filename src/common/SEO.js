import React from 'react'
import PropTypes from "prop-types";
import { Helmet, HelmetData } from 'react-helmet-async';
const helmetData = new HelmetData({});

const SEO = ( { title } ) => {
    const structuredJSON = JSON.stringify(
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "contactPoint" : [
            { "@type" : "ContactPoint",
                "telephone" : "+5541999601055",
                "contactType" : "customer service"
            } ],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Curitiba, Brazil",
            "postalCode": "81560-460",
            "streetAddress": "Eurides Maciel de Almeida, 192"
        },
        "member": [
            {
            "@type": "Organization"
            }
        ],
        "alumni": [
            {
            "@type": "Person",
            "name": "Francisco Freitas Jr"
            }
        ],
        "url" : "https://www.ds3i.com.br",
        "email": "francisco(at)ds3i.com.br",
        "telephone": "+5541999601055",
        "name": "DS3I - Desenvolvimento de Aplicativos e Sistemas",
        "slogan": "Desenvolvimento de soluções digitais para o seu negócio",
        "logo": "https://www.ds3i.com.br/images/logo/azul.svg",
        "image": [
            "https://firebasestorage.googleapis.com/v0/b/apps-ds3i.appspot.com/o/123244219_1721507951345044_3679130470784341172_n.png?alt=media&token=3440767f-8615-4e56-945c-7b194f2f9697",
            "https://firebasestorage.googleapis.com/v0/b/apps-ds3i.appspot.com/o/123244219_1721507951345044_3679130470784341172_n.png?alt=media&token=3440767f-8615-4e56-945c-7b194f2f9697"
        ],
        "sameAs": [
            "https://www.facebook.com/OficialDs3i/",
            "https://twitter.com/OficialDs3i/",
            "https://www.linkedin.com/company/ds3i/",
            "https://www.instagram.com/ds3i_/"
        ]
      }
    
    );
    
    return (
        <>
            <Helmet helmetData={helmetData}>
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
                <script type="application/ld+json">{structuredJSON}</script>
            </Helmet>
        </>
    )
}
SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;