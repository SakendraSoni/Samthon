import React from "react"
import catagories1 from "../Assets/Overview.png"
import also1 from "../Assets/also1.png"
import also2 from "../Assets/also2.png"
import also3 from "../Assets/also3.png"
import cat1 from "../Assets/cat1.png"
import cat2 from "../Assets/cat2.png"
import cat3 from "../Assets/cat3.png"
import cat4 from "../Assets/cat4.png"

const catagories = () => {
	return (
		<div>
			<div>
				<div className="image min-h-screen flex flex-col items-end">
					<img src={catagories1} alt="" width="100%" />
					<button className="btn mt-5 rounded-full mr-10">Shop More</button>
				</div>
				<div className="font-bold text-3xl mt-20 ml-20 mb-20">Also</div>
				<div className="flex justify-evenly pb-48">
					<img src={also1} alt="" />
					<img src={also2} alt="" />
					<img src={also3} alt="" />
				</div>
			</div>
			<div className="flex flex-col items-end">
				<div className="bg-[#15133C] min-h-[45rem] min-w-full">
					<div className="flex justify-around items-center min-h-[40rem]">
						<div className="flex flex-col items-center">
							<img src={cat1} alt="" />
							<button className="bg-[#F1EEE9] px-10 py-2 rounded-lg">
								Rings
							</button>
						</div>
						<div className="flex flex-col items-center">
							<img src={cat2} alt="" />
							<button className="bg-[#F1EEE9] px-10 py-2 rounded-lg mt-6">
								Earrings
							</button>
						</div>
						<div className="flex flex-col items-center">
							<img src={cat3} alt="" />
							<button className="bg-[#F1EEE9] px-10 py-2 rounded-lg mt-6">
								Necklace
							</button>
						</div>
						<div className="flex flex-col items-center">
							<img src={cat4} alt="" />
							<button className="bg-[#F1EEE9] px-10 py-2 rounded-lg mt-6">
								Bangles
							</button>
						</div>
					</div>
				</div>
				<button className="btn mt-5 rounded-full mr-10">More</button>
			</div>
		</div>
	)
}

export default catagories
