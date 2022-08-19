import React from 'react';
import FormOne from '../contact/FormOne';
import Accordion from 'react-bootstrap/Accordion';
import { MdArrowForwardIos } from 'react-icons/md';


const AboutTwo = ({detail = null }) => {
    return (
        <div className="section-padding">
            <div className="container">
            { detail!==null && detail!==undefined ?
            <div className="row">
                    <div className="col-lg-6">
                        <div className="why-choose-us">
                            <div className="section-heading heading-left">
                                <span className="subtitle">Solução Digital</span>
                                <h3 className="title">{detail.about? detail.about.title: ``}</h3>
                                <p>{detail.about? detail.about.description: ``}</p>
                            </div>
                            <Accordion defaultActiveKey="0">
                            {detail.itens ? detail.itens.map((data, index) => ( 
                                <>
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header><MdArrowForwardIos /> {data.title}</Accordion.Header>
                                        <Accordion.Body>
                                        {data.description}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </>
                            )) : ``}
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box shadow-box mb--30">
                            <h3 className="title">Solicite agora mesmo um orçamento</h3>
                            <FormOne />
                        </div>
                    </div>
                </div>
                : <></> }
            </div>
        </div>
    )
}

export default AboutTwo;