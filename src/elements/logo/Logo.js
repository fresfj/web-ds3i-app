import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

const Logo = ({limage, dimage, simage}) => {
    return (
        <Link to={process.env.PUBLIC_URL + "/"}>
            <LazyLoad height={80} once><img width={80} height={80} className="light-version-logo" src={process.env.PUBLIC_URL + limage} alt="logo" /></LazyLoad>
            <LazyLoad height={80} once><img width={80} height={80} className="dark-version-logo" src={process.env.PUBLIC_URL + dimage} alt="logo" /></LazyLoad>
            <LazyLoad height={80} once><img width={80} height={80} className="sticky-logo" src={process.env.PUBLIC_URL + simage} alt="logo" /></LazyLoad>
        </Link>
    )
}


export default Logo;