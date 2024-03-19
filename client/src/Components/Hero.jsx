import React from "react"
import "./Navbar.css"
import "./Hero.css"

const Hero = () => {
	return (
		<div className="wrapper flex flex-col justify-center gap-6 m-auto rounded-lg">
			<div className="main-head ml-20">Discover Exquisite Gold Ornaments</div>
			<div className="small-para ml-20 text-white">
				Elevate your style with our stunning collection of gold ornaments.
				Browse through out handcrafted desgins and find the perfect place to
				enhance your beauty.
			</div>
			<div className="multi-btns flex gap-6 ml-20">
				<button className="btn-pink btn-shop">Shop</button>
				<button className="btn-pink btn-learnmore">Learn More</button>
			</div>
		</div>
	)
}

export default Hero
