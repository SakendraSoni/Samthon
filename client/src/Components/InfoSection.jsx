import React from "react"
import Ornaments from "../Assets/oranments.jpg"
import cube from "../Assets/cube-3d-svgrepo-com.svg"
import "./InfoSection.css"

const InfoSection = () => {
	return (
		<div className="flex justify-between Info m-auto items-center">
			<div className="show-para ml-48 flex flex-col gap-5">
				<div className="show-svg">
					<img src={cube} alt="cube Logo" width="25" />
				</div>
				<div className="sub-head">
					Experience Unmatched Quality and Convenience with Our Online Store
				</div>
				<div className="small-para">
					At our E commerce store, we prioritize your satisfaction by offering
					free shipping easy returns and a guarantee of top notch quality. Shop
					with confidence today!
				</div>
			</div>
			<div className="show-img mr-32">
				<img
					src={Ornaments}
					alt="Gold Logo"
					width="500"
					className="rounded-lg"
				/>
			</div>
		</div>
	)
}

export default InfoSection
