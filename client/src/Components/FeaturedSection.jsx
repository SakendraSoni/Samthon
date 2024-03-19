import React from "react"
import "./FeaturedSection.css"
import cart_1 from "../Assets/cart1.webp"
import img1 from "../Assets/img1.png"
import img2 from "../Assets/img2.png"
import img3 from "../Assets/img3.png"
import img4 from "../Assets/img4.png"

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
							src={img1}
							alt="Gold Logo"
							width="250"
							className="m-auto mt-10"
						/>
					</div>
					<div className="ornament-detail flex justify-between max-w-30">
						<div className="left-sec">
							<div className="ornament-name mt-5 font-semibold ml-3">
								Elegant Necklace
							</div>
							<div className="ornament-tag ml-3 font-thin text-sm">Gold</div>
						</div>
						<div className="flex flex-col mt-5">
							<div className="right-sec mr-3">8grm</div>
							<div className="right-sec mr-3">Rs 51200</div>
						</div>
					</div>
					<button className="addCart mt-3 px-20 py-2 ml-7">Add To Cart</button>
				</div>
				<div className="card-section">
					<div className="img-part">
						<img
							src={img2}
							alt="Gold Logo"
							width="250"
							className="m-auto mt-10"
						/>
					</div>
					<div className="ornament-detail flex justify-between">
						<div className="left-sec">
							<div className="ornament-name mt-5 font-semibold ml-3">
								Stylish bracelet
							</div>
							<div className="ornament-tag ml-3 font-thin text-sm">Gold</div>
						</div>
						<div className="flex flex-col mt-5">
							<div className="right-sec mr-3">15grm</div>
							<div className="right-sec mr-3">Rs 96000</div>
						</div>
					</div>
					<button className="addCart mt-3 px-20 py-2 ml-7">Add To Cart</button>
				</div>
				<div className="card-section">
					<div className="img-part">
						<img
							src={img3}
							alt="Gold Logo"
							width="250"
							className="m-auto mt-10"
						/>
					</div>
					<div className="ornament-detail flex justify-between">
						<div className="left-sec">
							<div className="ornament-name mt-5 font-semibold ml-3">
								Gorgeous earring
							</div>
							<div className="ornament-tag ml-3 font-thin text-sm">Gold</div>
						</div>
						<div className="flex flex-col mt-5">
							<div className="right-sec mr-3">10grm</div>
							<div className="right-sec mr-3">Rs 64000</div>
						</div>
					</div>
					<button className="addCart mt-3 px-20 py-2 ml-7">Add To Cart</button>
				</div>
				<div className="card-section">
					<div className="img-part">
						<img
							src={img4}
							alt="Gold Logo"
							width="250"
							className="m-auto mt-10"
						/>
					</div>
					<div className="ornament-detail flex justify-between">
						<div className="left-sec">
							<div className="ornament-name mt-5 font-semibold ml-3">
								Charming ring
							</div>
							<div className="ornament-tag ml-3 font-thin text-sm">Gold</div>
						</div>
						<div className="flex flex-col mt-5">
							<div className="right-sec mr-3">5grm</div>
							<div className="right-sec mr-3">Rs 3200</div>
						</div>
					</div>
					<button className="addCart mt-3 px-20 py-2 ml-7">Add To Cart</button>
				</div>
			</div>
		</div>
	)
}

export default FeaturedSection
