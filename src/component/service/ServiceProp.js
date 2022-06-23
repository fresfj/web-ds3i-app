import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';
import LazyLoad from 'react-lazyload';


const ServiceProp = ({colSize, serviceStyle, serviceData}) => {

    return (
		<>
			{serviceData.map((data, index) => (
				<div className={colSize} key={index} >
					<div className={`services-grid ${serviceStyle}`}>
						<div className="thumbnail">
							<LazyLoad height={200} offset={[-100, 0]} once ><img src={process.env.PUBLIC_URL + data.image} alt="icon" /></LazyLoad>
						</div>
						<div className="content">
							<h5 className="title"> 
								<Link to={process.env.PUBLIC_URL + `/solucao-digital/${slugify(data.title)}/`}>{data.title}</Link>
							</h5>
							<p>{data.description}</p>
							<Link to={process.env.PUBLIC_URL + `/solucao-digital/${slugify(data.title)}/`} className="more-btn">Mais informações</Link>
						</div>
					</div>
			 	</div>
			))}
		</>
    )
}

export default ServiceProp;