import React from 'react';
import LocationData from '../../data/contact/LocationData.json';
import LazyLoad from 'react-lazyload';
const allData = LocationData;

const ContactLocation = () => {
    return (
        <>
            {allData.map((data, index) => (
                <div className="col-lg-4 col-sm-12" key={index}>
                    <div className="office-location">
                        <div className="thumbnail">
                            <LazyLoad height={200}><img src={process.env.PUBLIC_URL + data.thumb} alt={data.title} /></LazyLoad>
                        </div>
                        <div className="content text-center">
                            <h4 className="title">{data.title}</h4>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ContactLocation;