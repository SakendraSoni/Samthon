import React from "react"
import rings from "../Assets/Exclusive-Design.webp"
import "./ExclusiveDesign.css"

const ExclusiveDesign = () => {
	return (
		<div className="Exclusive flex justify-between m-auto mt-60">
			<div className="show-img mr-8">
				<img src={rings} alt="Gold Logo" width="500" className="rounded-lg" />
			</div>
			<div className="text-area flex flex-col gap-8 mt-20 ml-9">
				<div className="E-1 pl-7">
					<div className="h-text">Exclusive Design</div>
					<div className="s-text">
						Discover Our Exclusive Collection of beautiful crafted gold and
						silver ornaments. Each piece is meticulously designed to showcase
						elegance and style.
					</div>
				</div>
				<div className="E-2 pl-7">
					<div className="h-text">Authencity Gurranteed</div>
					<div className="s-text">
						Shop with confidence knowing that all our gold and silver ornaments
						are certified to their Authencity. We ensure that every piece meets
						the highest quality standards.
					</div>
				</div>
				<div className="E-3 pl-7">
					<div className="h-text">LifeTime BuyBack</div>
					<div className="s-text">
						Enjoy the flexibility of out lifetime buyback policy. If you ever
						decide to part with your precious ornaments we offer a fair and
						hassel free buyback program
					</div>
				</div>
			</div>
		</div>
	)
}

export default ExclusiveDesign
