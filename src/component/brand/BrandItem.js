import React from 'react';

const Data = [
    {
        image: "/images/brand/Eletrolux.svg"
    },
    {
        image: "/images/brand/Tulio.svg"
    },
    {
        image: "/images/brand/CasadePianos.svg"
    },
    {
        image: "/images/brand/LatusSul.svg"
    },
    {
        image: "/images/brand/boardingfull.svg"
    },
    {
        image: "/images/brand/Talisma.svg"
    },
    {
        image: "/images/brand/CoopCisel.svg"
    },
    {
        image: "/images/brand/ChangesIdiomas.svg"
    },
]


const BrandItem = () => {
    return (
        <>
            {Data.map((data, index) => (
                <div className="col-lg-3 col-6" key={index}>
                    <div className="brand-grid text-center">
                        <img width={300} height={150} src={process.env.PUBLIC_URL + data.image} alt="Brand" />
                    </div>
                </div>
            ))}
        </>
    )
}

export default BrandItem;