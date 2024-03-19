import React from "react"

const Testimonial = () => {
	return (
		<div className="flex justify-between mb-96">
			<div className="leftPart ml-16">
				<div className="logo font-bold text-2xl">LOGO</div>
				<div className="s-para mt-4 max-w-sm">
					Stay up to date on the latest features and releases by joining our
					newsletter.
				</div>
				<div className="flex mt-8 gap-9">
					<input
						type="text"
						id="signup"
						name="signup"
						className="signup pr-40 pl-5 bg-[#15133c] text-white"
						placeholder="Enter your email"
					/>
					<button type="submit" className="btn btn-1 ">
						Subscribe
					</button>
				</div>
				<div className="max-w-md mt-7">
					By subscribing, you agree to our Privacy Policy and consent to receive
					updates from our company.
				</div>
			</div>
			<div className="rightPart flex gap-40 mr-16">
				<div className="col1 flex flex-col gap-5">
					<div className="font-semibold text-2xl">Column One</div>
					<div className="lin1">Link One</div>
					<div className="lin2">Link Two</div>
					<div className="lin3">Link Three</div>
					<div className="lin4">Link Four</div>
					<div className="lin5">Link Five</div>
				</div>
				<div className="col2 flex flex-col gap-5">
					<div className="font-semibold text-2xl">Column Two</div>
					<div className="lin1">Link One</div>
					<div className="lin2">Link Two</div>
					<div className="lin3">Link Three</div>
					<div className="lin4">Link Four</div>
					<div className="lin5">Link Five</div>
				</div>
				<div className="followus flex flex-col gap-5">
					<div className="font-semibold text-2xl">Follow Us</div>
					<div className="lin1">Facebook</div>
					<div className="lin2">Instagram</div>
					<div className="lin3">X</div>
					<div className="lin4">Linkdin</div>
					<div className="lin5">Youtube</div>
				</div>
			</div>
		</div>
	)
}

export default Testimonial
