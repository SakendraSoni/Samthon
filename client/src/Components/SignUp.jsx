import React from "react"
import "./SignUp.css"

const SignUp = () => {
	return (
		<div className="mx-auto bg-neutral-400 flex flex-col items-center pt-60 pb-60">
			<div className="text-4xl font-bold">
				Get Exclusive Access to Discounts{" "}
			</div>
			<div className="mt-5 font-medium">
				Be the first to know about our special collections and enjoy exclusive
				discounts.
			</div>
			<div className="flex gap-20 mt-12">
				<input
					type="text"
					id="signup"
					name="signup"
					className="signup min-w-80 min-h-8 pl-5"
					placeholder="Enter your email"
				/>
				<button type="submit" className="btn">
					Sign Up
				</button>
			</div>
			<div className="mt-4">
				By clicking Sign up you confirm that you agree to our terms and
				conditions.
			</div>
		</div>
	)
}

export default SignUp
