
import { useEffect, useState } from 'react';
import './featured.css'

import FeatureCard, { FeaturedType } from './featuredCard/FeatureCard'

{/* Fetcheld be az adatokat a featured jsonból és jelenítsd meg a featured_container elemből*/ }

{/* Állítsd be a featured.css-ben, hogy az órák 992px szélesség alatt egymás alá kerüljenek a fölött pedig egymás mellé */ }

const Featured = () => {
	const [featured, setFeatured] = useState<FeaturedType[]>([]);

	useEffect(() => {
		fetch('featured.json')
		.then(res => res.json())
		.then(data => setFeatured(data))
	}, [])

	return (
		<section className="featured" id="featured">
			<h2 className="feature__title">Featured</h2>
			<div className="featured__container">
				{
					featured.map((item, index) => <FeatureCard key={index} {...item}/>)
				}
			</div>
		</section>
	)
}

export default Featured