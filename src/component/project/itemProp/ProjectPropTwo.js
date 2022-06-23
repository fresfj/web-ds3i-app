import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-image-webp';
import { slugify } from '../../../utils';
import LazyLoad from 'react-lazyload';

const PropOne = ({projectStyle, portfolio}) => {
    return (
		<>
			<div className={`project-grid ${projectStyle}`}>
				<div className="thumbnail">
				<Link to={process.env.PUBLIC_URL + `/projeto/${slugify(portfolio.title)}/`}>
					<LazyLoad height={700}><Image width={600} height={700} webp={process.env.PUBLIC_URL + portfolio.webp } src={process.env.PUBLIC_URL + portfolio.image} alt="icon" /></LazyLoad>
				</Link>
				</div>
				<div className="content">
				<span className="subtitle text-white">
					{portfolio.category.map((cat, i) => (
						<span key={i}>{cat}</span>
					))}
				</span>
				<h3 className="title text-white"> 
					<Link to={process.env.PUBLIC_URL + `/projeto/${slugify(portfolio.title)}/`}>{portfolio.title}</Link>
				</h3>
				<div className="brand-logo mt-4">
					<img src={process.env.PUBLIC_URL + portfolio.icon } width={80} height={80} alt="Icon" />
				</div>
				</div>
			</div>
		</>
    )
}

export default PropOne;