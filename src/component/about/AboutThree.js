import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';

const Datas = [
    {
        id: 1,
        title: "Exploramos a ideia inicial",
        para: "Começamos sempre entendo o conceito, e o objetivo por trás da ideia, conectando todos os pontos e planejando um MVP que atenderá a necessidade da melhor forma possível."
    },
    {
        id: 2,
        title: "Exploramos o mercado",
        para: "Depois de definir o MVP, trabalhamos para descobrir e entender os produtos, negócios e público-alvo de seus clientes."
    },
    {
        id: 3,
        title: "Criamos o protótipo",
        para: "Nosso processo nos permite prototipar idéias complexas com rapidez e precisão, que podem ser facilmente transformadas em soluções totalmente funcionais."
    },
    {
        id: 4,
        title: "Desenvolvemos o produto",
        para: "Depois de ter um protótipo aprovado, iniciamos o desenvolvimento do produto. Buscando usar sempre tecnologias de performance pra atender da melhor forma os usuários finais."
    },
    {
        id: 5,
        title: "Testamos e publicamos",
        para: "Uma vez que o produto está pronto, ele deve iniciar o processo contínuo de testes e validações com usuários reais, só assim será possível identificar ajustes e correções."
    },
    {
        id: 6,
        title: "Damos manutenção contínua",
        para: "Todo ajuste e correção levantado por usuários é levado de volta pro nosso time de desenvolvedores, que será corrigido e enviado para publicação novamente."
    }
]




const AboutThree = () => {
    return (
        <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
            <div className="container">
                <SectionTitle 
                    subtitle="Com trabalhamos"
                    title="Um pouco de como trabalhamos"
                    description="Gostamos do que fazemos e nos divertimos enquanto estamos trabalhando."
                    textAlignment="heading-left heading-light-left mb--100"
                    textColor=""
                />

                <div className="row">
                    {Datas.map((data) => (
                        <div className="col-lg-4" key={data.id}>
                            <div className="about-quality">
                                <h3 className="sl-number">{data.id}</h3>
                                <h5 className="title">{data.title}</h5>
                                <p>{data.para}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <ul className="list-unstyled shape-group-10">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} alt="Circle" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} alt="Circle" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} alt="Circle" /></li>
            </ul>
        </div>
    )
}

export default AboutThree;