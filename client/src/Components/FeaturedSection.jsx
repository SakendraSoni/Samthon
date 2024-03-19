import React from "react"
import "./FeaturedSection.css"
import cart_1 from "../Assets/cart1.webp"

const FeaturedSection = () => {
	return (
		<div className="featured-section m-auto flex flex-col gap-4">
			<div className="font-bold">Discover</div>
			<div className="font-bold text-6xl">Featured</div>
			<div className="flex justify-between">
				<div>Explore our collection of exquiste gold and silver ornaments</div>
				<button className="btn">View All</button>
			</div>
			<div className="wrap flex gap-20 mt-20 ml-10">
				<div className="card-section">
					<div className="img-part">
						<img
							src={cart_1}
							alt="Gold Logo"
							width="250"
							className="m-auto mt-10"
						/>
					</div>
					<div className="ornament-detail flex justify-between">
						<div className="left-sec">
							<div className="ornament-name mt-5 font-semibold ml-3">
								Elegant Necklace
							</div>
							<div className="ornament-tag ml-3 font-thin text-sm">Gold</div>
						</div>
						<div className="right-sec mt-5 mr-3">$199</div>
					</div>
					<button className="addCart mt-3 px-20 py-2 ml-7">Add To Cart</button>
				</div>
				<div className="card-section">
					<div className="img-part">
						<img
							src={cart_1}
							alt="Gold Logo"
							width="250"
							className="m-auto mt-10"
						/>
					</div>
					<div className="ornament-detail flex justify-between">
						<div className="left-sec">
							<div className="ornament-name mt-5 font-semibold ml-3">
								Elegant Necklace
							</div>
							<div className="ornament-tag ml-3 font-thin text-sm">Gold</div>
						</div>
						<div className="right-sec mt-5 mr-3">$199</div>
					</div>
					<button className="addCart mt-3 px-20 py-2 ml-7">Add To Cart</button>
				</div>
				<div className="card-section">
					<div className="img-part">
						<img
							src={cart_1}
							alt="Gold Logo"
							width="250"
							className="m-auto mt-10"
						/>
					</div>
					<div className="ornament-detail flex justify-between">
						<div className="left-sec">
							<div className="ornament-name mt-5 font-semibold ml-3">
								Elegant Necklace
							</div>
							<div className="ornament-tag ml-3 font-thin text-sm">Gold</div>
						</div>
						<div className="right-sec mt-5 mr-3">$199</div>
					</div>
					<button className="addCart mt-3 px-20 py-2 ml-7">Add To Cart</button>
				</div>
				<div className="card-section">
					<div className="img-part">
						<img
							src={cart_1}
							alt="Gold Logo"
							width="250"
							className="m-auto mt-10"
						/>
					</div>
					<div className="ornament-detail flex justify-between">
						<div className="left-sec">
							<div className="ornament-name mt-5 font-semibold ml-3">
								Elegant Necklace
							</div>
							<div className="ornament-tag ml-3 font-thin text-sm">Gold</div>
						</div>
						<div className="right-sec mt-5 mr-3">$199</div>
					</div>
					<button className="addCart mt-3 px-20 py-2 ml-7">Add To Cart</button>
				</div>
			</div>
		</div>
	)
}

export default FeaturedSection
