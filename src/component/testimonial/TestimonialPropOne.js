import React from 'react';
import TestimonialData from "../../data/testimonial/TestimonialData.json";
import LazyLoad from 'react-lazyload';
import Image from 'react-image-webp';
const allData = TestimonialData;


const TestimonialItem = ({colSize, itemShow}) => {
    return (
        <>
            {allData.slice(0, itemShow).map((data, index) => (
                <div className={`${colSize}`} key={index}>
                    <div className="testimonial-grid">
                        <span className="social-media"></span>
                        <p>{data.description}</p>
                        <div className="author-info">
                            <div className="thumb">
                            <LazyLoad height={50}><Image width={50} height={50} webp={process.env.PUBLIC_URL + data.authorwebp} src={process.env.PUBLIC_URL + data.authorimg} alt="Google Review" /></LazyLoad>
                            </div>
                            <div className="content">
                                <span className="name">{data.authorname}</span>
                                <span className="designation">{data.authordesig}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TestimonialItem;