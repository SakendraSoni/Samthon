import React, { useEffect, useState } from "react"
import logoImg from "../Assets/Jewelry.png"
import "./Navbar.css"
import { Link } from "react-router-dom"

const MINUTE_MS = 6000

const Navbar = () => {
	const [currRates, setCurrRates] = useState(5784.5)
	async function getRates() {
		var myHeaders = new Headers()
		// goldapi-e8ytcgsltzc474u-io
		myHeaders.append("x-access-token", "goldapi-e8ytcgsltzc474u-io")
		myHeaders.append("Content-Type", "application/json")
		var requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow",
		}
		fetch("https://www.goldapi.io/api/XAU/INR", requestOptions)
			.then((response) => response.json())
			.then((result) => {
				let newRate = result.price / 31.1035
				newRate = newRate.toFixed(2)
				console.log(newRate)
				setCurrRates(newRate)
			})
			.catch((error) => console.log("error", error))
	}

	useEffect(() => {
		const interval = setInterval(() => {
			getRates()
		}, MINUTE_MS)

		return () => clearInterval(interval)
	}, [])

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
			<div className="flex gap-20 mt-5 mr-10 mb-5">
				<div className=" bg-[#EC994B] flex justify-center items-center px-4">
					Live Gold Rate {currRates}₹
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
						<button className="btn-pink	">Login</button>
					</Link>
				)}
			</div>
		</div>
	)
}

export default Navbar
