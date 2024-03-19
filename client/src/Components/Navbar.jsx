import React from "react"
import logoImg from "../Assets/logo192.png"
import "./Navbar.css"

const Navbar = () => {
	return (
		<div className="flex justify-between bg-[#F1EEE9]">
			<div className="logo ml-10 mt-5">
				<img src={logoImg} alt="Gold Logo" width="50" />
			</div>
			<div className="nav-links flex gap-6 pt-7">
				<p>Shop Now</p>
				<p>About Us</p>
				<p>Contact Us</p>
				<p>More Options</p>
			</div>
			<button className="btn-pink mt-5 mr-10 mb-5">Sign Up</button>
		</div>
	)
}

export default Navbar
