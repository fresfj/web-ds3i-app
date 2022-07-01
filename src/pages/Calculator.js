import React, {useState} from 'react';
import loadable from '@loadable/component'
import SplashFooter from '../common/footer/SplashFooter';
import SplashHeader from '../common/header/SplashHeader';
import SEO from '../common/SEO';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SectionTitle from '../elements/section-title/SectionTitle';
import CalculatorData from "../data/calculator/CalculatorData.json";
import { FaInfoCircle } from "react-icons/fa";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { motion } from "framer-motion/dist/framer-motion"
import LazyLoad from 'react-lazyload';
import Image from 'react-image-webp';
const FormOne = loadable(() => import('../component/contact/FormOne'));
const allData = CalculatorData;

const Calculator = () => {
    const [start, setStart] = useState(true)
    const [showScore, setShowScore] = useState(false);
    const [summedValues] = useState([]);
    const [values, setValues] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const startQuiz = () => setStart(!start)

    const restQuiz = () => {
        window.location.reload()
    }

    const handleAnswerButtonClick = ( data ) => {
        if(data.value > 0){
            summedValues.push(data)
            setValues(values + data.value)
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < allData.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
    }

    const getFormattedPrice = (value, cifrao = true) => {
        let price = parseFloat(value)
        let type = cifrao ? 'currency' : 'decimal'
        return new Intl.NumberFormat('pt-BR', { style: type, currency: 'BRL' }).format(price)
    }
    const [active, setActive] = useState(false);
    const cardQuestion = {
        active: {
            scale: [0, 0.4, 1],
            opacity:  [0, 0, 1],
            transition: { duration: 1, when: "beforeChildren", staggerChildren: 0.3}
        },
        disabled: {
            scale: [0, 0.4, 1],
            opacity:  [0, 0, 1],
            transition: { duration: 1 }
        }
    }
    return (
        <>
        <SEO title="Quanto custa um aplicativo?" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <LazyLoad height={200} offset={[-100, 0]} once ><SplashHeader /></LazyLoad>
                <div className="section section-padding bg-color-light spalsh-why-choose" id="splash-why-choose">
                    <div className="container mt--80">
                        { start ? 
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb--40">
                                <AnimationOnScroll  animateIn="slideInUp" duration={1} delay={300} animateOnce={true}>
                                <div className="text-center">
                                <LazyLoad height={200}><Image height={300} width={300} webp={process.env.PUBLIC_URL + "/images/others/main-calculator.webp"} src={process.env.PUBLIC_URL + "/images/others/main-calculator.png"} alt="Simulador" /></LazyLoad>
                                </div>
                                <div className="row align-items-center">
                                    <div className="subtitle">Simulador</div>
                                    <h1 className="title">Quanto custa um aplicativo?</h1>
                                    <p>Calcule rapidamente o custo para poder criar seu aplicativo respondendo algumas perguntas.</p>
                                </div>
                                <button onClick={startQuiz} className="axil-btn btn-fill-primary">Iniciar</button>
                                </AnimationOnScroll>
                            </div>
                            <div className="col-xl-5 col-lg-6 offset-xl-1">
                                <AnimationOnScroll  animateIn="zoomIn" duration={1} delay={300} animateOnce={true}>
                                <div className="contact-form-box">
                                    <h3 className="title">Vamos conversar e transformar sua ideia em algo memorável.</h3>
                                    <LazyLoad height={200} offset={[-100, 0]} once ><FormOne data={summedValues} /></LazyLoad>
                                </div>
                                </AnimationOnScroll>
                            </div>
                        </div>
                        : 
                        showScore ? 
                            <div className="row justify-content-center">
                                <div className="col-lg-6  mb--40">
                                <AnimationOnScroll  animateIn="slideInUp" duration={1} delay={300} animateOnce={true}>
                                    <div className="text-center">
                                        <LazyLoad height={200}><Image height={300} width={300} webp={process.env.PUBLIC_URL + "/images/others/end-calculator.webp"} src={process.env.PUBLIC_URL + "/images/others/end-calculator.png"} alt="Simulador" /></LazyLoad>
                                    </div>
                                    <div className="section-heading heading-dark">
                                        <h5 className="title mb-0">O custo estimado do seu aplicativo fica</h5>
                                        <h4 className="title fw-bold">a partir de <span className='text-success'>{getFormattedPrice(values)}</span></h4>
                                        <span className="subtitle">Baseado nas suas respostas conseguimos levantar o custo estimado para iniciar o desenvolvimento do seu aplicativo, para saber mais informações e tirar dúvidas, entre em contato com a gente através do formulário ou chama no whats.</span>
                                    </div>
                                    <button onClick={restQuiz} className="axil-btn btn-fill-primary">Recomeçar o calculo</button>
                                </AnimationOnScroll>
                                </div>
                                <div className="col-xl-5 col-lg-6 offset-xl-1">
                                    <AnimationOnScroll  animateIn="zoomIn" duration={1} delay={300} animateOnce={true}>
                                    <div className="contact-form-box">
                                        <h3 className="title">Já está pronto para começar algo memoravél? Vamos conversar.</h3>
                                        <LazyLoad height={200} offset={[-100, 0]} once ><FormOne data={{values: values, summed: summedValues}} /></LazyLoad>
                                    </div>
                                    </AnimationOnScroll>
                                </div>
                            </div>
                        : 
                        <div className="container">
                            <motion.div key={active ? active : "empty"}>
                                <SectionTitle 
                                    subtitle="Orçamento"
                                    title={allData[currentQuestion].q}
                                    textAlignment="heading-left mb--40"
                                    textColor=""
                                />
                            </motion.div>
                            <div className="row justify-content-center">
                            {allData[currentQuestion].a.map((answerOption, index) => (
                                <motion.div className="col-xl-4 col-lg-4" key={index} variants={cardQuestion} animate={active ? "active":"disabled"} onClick={() => setActive(!active)}>
                                    <div className="support-box support-ticket splash-hover-control">
                                    <span className='hover-shadow' onClick={() =>handleAnswerButtonClick(answerOption)}>
                                        <div className='inner'>
                                        <div className="content">
                                            <div className="heading">
                                                <h5 className="subtitle" dangerouslySetInnerHTML={{__html: answerOption.text}}></h5>
                                            </div>
                                            <p>{answerOption.price}</p>
                                        </div>
                                        </div>
                                    </span>
                                    </div>
                                </motion.div>
                            ))}
                            <div className="col-lg-10">
                                <p className='d-inline-flex px-2 py-1 fw-semibold text-warning bg-warning bg-opacity-10 border border-warning border-opacity-10 rounded-2'><FaInfoCircle className='mt-1 me-2' /> Selecione uma das opções acima para prosseguir.</p>
                            </div>
                            </div>
                        </div>
                        } 
                    </div>
                    <ul className="shape-group list-unstyled">
                        <li className="shape-2"><LazyLoad height={200}><Image width={1682} height={442} webp={process.env.PUBLIC_URL + "/images/others/line-4.webp"} src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Shape" /></LazyLoad></li>
                    </ul>
                </div>
                <LazyLoad height={200} offset={[-100, 0]} once ><SplashFooter /></LazyLoad>
            </main>
        </>
    )
}

export default Calculator;