import React from 'react';
import { Link } from 'react-router-dom';
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from '../../utils';
import LazyLoad from 'react-lazyload';
import Image from 'react-image-webp';

const AllData = ServiceData;

const ServicePropOne = ({colSize, serviceStyle, itemShow, marginTop}) => {

	const topMargin = (index) => {
		if (marginTop === "yes") {
			if (index === 0) {
				return "mt--200 mt_md--0";
			} else if (index === 1) {
				return "mt--100 mt_md--0";
			}else {
				return "mt--0";
			}
		}else {
			return "";
		}
	}

    return (
		<>
			{AllData.slice(0, itemShow).map((data, index) => (
				<div className={`${colSize} ${topMargin(index)}`} key={index} >
					<div className={`services-grid ${serviceStyle}`}>
						<div className="thumbnail">
							<LazyLoad height={85}><Image width={85} height={85} webp={process.env.PUBLIC_URL + data.webp} src={process.env.PUBLIC_URL + data.image} alt="icon" /></LazyLoad>
						</div>
						<div className="content">
							<h2 className="title h5"> 
								<Link to={process.env.PUBLIC_URL + `/solucao-digital/${slugify(data.title)}/`}>{data.title}</Link>
							</h2>
							<p>{data.description}</p>
							<Link to={process.env.PUBLIC_URL + `/solucao-digital/${slugify(data.title)}/`} className="more-btn">Mais informações</Link>
						</div>
					</div>
			 	</div>
			))}
		</>
    )
}

export default ServicePropOne;