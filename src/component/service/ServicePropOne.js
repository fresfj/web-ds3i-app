import React from 'react';
import { Link } from 'react-router-dom';
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from '../../utils';
import LazyLoad from 'react-lazyload';
import Image from 'react-image-webp';
import { motion } from "framer-motion/dist/framer-motion"
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
	const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
	}
	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1
		}
	}
    return (
		<>
			<motion.div
				className='row'
				variants={container}
				initial="hidden"
				animate="visible"
			>
			{AllData.slice(0, itemShow).map((data, index) => (
				<div className={`${colSize} ${topMargin(index)}`} key={index} >
					<motion.div key={index} variants={item} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
					<Link to={process.env.PUBLIC_URL + `/solucao-digital/${slugify(data.title)}/`}>
						<div className={`services-grid ${serviceStyle}`}>
							<div className="thumbnail">
								<LazyLoad height={85}><Image width={85} height={85} webp={process.env.PUBLIC_URL + data.webp} src={process.env.PUBLIC_URL + data.image} alt="icon" /></LazyLoad>
							</div>
							<div className="content">
								<h2 className="title h5">{data.title}</h2>
								<p>{data.description}</p>
								<Link to={process.env.PUBLIC_URL + `/solucao-digital/${slugify(data.title)}/`} className="more-btn">Mais informações</Link>
							</div>
						</div>
					</Link>
					</motion.div>
			 	</div>
			))}
			</motion.div>
		</>
    )
}

export default ServicePropOne;