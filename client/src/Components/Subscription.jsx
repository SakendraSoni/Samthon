import React from "react"
import "./Subscription"

const Subscription = () => {
	return (
		<div className="flex justify-between mx-20 h-96 mt-32">
			<div className="left-part">
				<div className="h-para text-5xl font-semibold">
					Discover Our Subscription Benefits
				</div>
				<div className="s-para mt-5 text-xl">
					Unlock Exclusive Loan Options for Gold Ornaments
				</div>
			</div>
			<div className="right-part flex gap-7">
				<button className="btn">Customize Now</button>
			</div>
		</div>
	)
}

export default Subscription
