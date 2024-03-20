import React from "react"
import logoImg from "../Assets/Jewelry.png"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
	return (
		<div className="flex justify-between bg-[#F1EEE9]">
			<div className="logo ml-10 mt-5 flex items-center font-bold">
				<Link to="/">
					<img src={logoImg} alt="Gold Logo" width="50" />
				</Link>
				<p className="">Sona</p>
			</div>
			<div className="nav-links flex gap-6 pt-7">
				<p>Shop Now</p>
				<p>About Us</p>
				<p>Contact Us</p>
				<p>More Options</p>
			</div>
			{localStorage.getItem("auth-token") ? (
				<button
					onClick={() => {
						localStorage.removeItem("auth-token")
						window.location.replace("/")
					}}
				>
					Logout
				</button>
			) : (
				<Link to="/login">
					<button className="btn-pink mt-5 mr-10 mb-5">Login</button>
				</Link>
			)}
		</div>
	)
}

export default Navbar
