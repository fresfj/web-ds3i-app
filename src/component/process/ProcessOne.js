import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import ProcesstData from "../../data/process/ProcessData.json";
import Tilty from 'react-tilty';
import Image from 'react-image-webp';
import LazyLoad from 'react-lazyload';
const getProcesstData = ProcesstData;

const ProcessOne = () => {
    return (
        
        <div className="section section-padding bg-color-light pb--70">
            <SectionTitle 
                subtitle="Desenvolvimento de software"
                title="O que fazemos?"
                description="Ajudamos você a elevar o seu negócio, elevando o seu produto ao próximo nível, através da consultoria e da arte do design. Adoramos caminhar na linha fina entre produtos impressionantes e utilizáveis."
                textAlignment=""
                textColor="mb--90"
            />
            <div className="container">
                {getProcesstData.map((data) => (
                    <div key={data.id} className={`process-work ${(data.id % 2  === 0) ? "content-reverse" : ""}`}>
                        <Tilty perspective={2000}>
                            <div className="thumbnail">
                                <LazyLoad height={200}><Image width={410} height={410} webp={process.env.PUBLIC_URL + data.webp} src={process.env.PUBLIC_URL + data.thumb} alt="Thumbnail" /></LazyLoad>
                            </div>
                        </Tilty>
                    <div className="content">
                        <span className="subtitle">{data.subtitle}</span>
                        <h3 className="title">{data.title}</h3>
                        <p>{data.paragraph}</p>
                    </div>
                </div>
                ))}
            </div>
            <ul className="shape-group-17 list-unstyled">
                <li className="shape shape-1"><LazyLoad height={200}><Image webp={process.env.PUBLIC_URL + "/images/others/bubble-24.webp"} src={process.env.PUBLIC_URL + "/images/others/bubble-24.png"} alt="Bubble" width={400} height={271} /></LazyLoad></li>
                <li className="shape shape-2"><LazyLoad height={200}><Image webp={process.env.PUBLIC_URL + "/images/others/bubble-23.webp"} src={process.env.PUBLIC_URL + "/images/others/bubble-23.png"} alt="Bubble" width={1005} height={1338} /></LazyLoad></li>
                <li className="shape shape-3"><LazyLoad height={200}><Image webp={process.env.PUBLIC_URL + "/images/others/line-4.webp"} src={process.env.PUBLIC_URL + "/images/others/line-4.png"} width={1682} height={445} alt="Line" /></LazyLoad></li>
                <li className="shape shape-4"><LazyLoad height={200}><Image webp={process.env.PUBLIC_URL + "/images/others/line-5.webp"} src={process.env.PUBLIC_URL + "/images/others/line-5.png"} width={1883} height={498} alt="Line" /></LazyLoad></li>
                <li className="shape shape-5"><LazyLoad height={200}><Image webp={process.env.PUBLIC_URL + "/images/others/line-4.webp"} src={process.env.PUBLIC_URL + "/images/others/line-4.png"} width={1682} height={445} alt="Line" /></LazyLoad></li>
                <li className="shape shape-6"><LazyLoad height={200}><Image webp={process.env.PUBLIC_URL + "/images/others/line-5.webp"} src={process.env.PUBLIC_URL + "/images/others/line-5.png"} width={1883} height={498} alt="Line" /></LazyLoad></li>
            </ul>
        </div>
    )
}

export default ProcessOne;