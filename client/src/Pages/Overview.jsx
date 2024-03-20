import React from "react"
import cat1 from "../Assets/cat1.png"
import cat2 from "../Assets/cat2.png"
import cat3 from "../Assets/cat3.png"
import cat4 from "../Assets/cat4.png"

const Overview = () => {
	return (
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
	)
}

export default Overview
