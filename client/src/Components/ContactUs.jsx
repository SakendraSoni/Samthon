import React from "react"
import email from "../Assets/email.svg"
import phone from "../Assets/phone.svg"
import location from "../Assets/location.svg"

const ContactUs = () => {
	return (
		<div className="flex justify-around mt-40 mb-40 gap-7">
			<div className="email flex flex-col items-center gap-4">
				<img src={email} alt="email-missing" width="50" />
				<div className="text-4xl font-bold">Email</div>
				<div className="max-w-xs text-center">
					If you have any questions or need support, please feel free to contact
					us
				</div>
				<div className="">Sakendrasoni38@gmail.com</div>
			</div>
			<div className="phone flex flex-col items-center gap-4">
				<img src={phone} alt="" className="" width="50" />
				<div className="text-4xl font-bold">Phone</div>
				<div className="">You can also contact us by phone if you prefer.</div>
				<div className="">+91 9302910549</div>
			</div>
			<div className="office flex flex-col items-center gap-4">
				<img src={location} alt="" width="50" />
				<div className="text-4xl font-bold">Location</div>
				<div className="">Visit our website during business hour.</div>
				<div className="">MP Betul</div>
			</div>
		</div>
	)
}

export default ContactUs
