import React from "react"

const Login = () => {
	return (
		<div className="bg-[#73777B] min-h-screen flex flex-col justify-center items-center">
			<div className="container min-h-[34rem] max-w-[50rem] bg-[#F1EEE9] rounded-xl">
				<div className="login text-center pt-8 text-3xl">Log In</div>
				<div className="main-section flex flex-col max-w-[20rem] mx-auto pt-28 ">
					<input
						type="text"
						id="username"
						placeholder="Username"
						className="h-7 p-3"
					/>
					<input
						type="password"
						id="password"
						placeholder="Password"
						className="mt-4 h-7 p-3"
					/>

					<button className="submit text-white bg-[#15133C] mx-auto px-8 py-2 mt-5">
						Submit
					</button>
					<div className="pt-5 mx-auto">If you already have an account,</div>
					<button className="">Click Here To Sign Up</button>
				</div>
			</div>
		</div>
	)
}

export default Login
