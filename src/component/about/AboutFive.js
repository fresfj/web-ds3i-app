import React from 'react';

const AboutFive = () => {
    return (
      <div className="section-padding-equal">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="about-team">
                    <div className="thumbnail">
                        <img src={process.env.PUBLIC_URL + "/images/others/suport.png"} alt="thumbnail" />
                    </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="about-team">
                    <div className="section-heading heading-left">
                        <span className="subtitle">Nossa Time</span>
                        <h2>Time pequeno, resultado grande!</h2>  
                        <p>Somos um grupo apaixonado e dinâmico de amigos que se tornaram como uma família. Esse é o tipo de ambiente que cultivamos.</p>
                        <p>Gostamos do que fazemos e nos divertimos enquanto estamos trabalhando.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFive;