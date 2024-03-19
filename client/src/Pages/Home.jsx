import React from "react"
import Hero from "../Components/Hero"
import InfoSection from "../Components/InfoSection"
import ExclusiveDesign from "../Components/ExclusiveDesign"
import FeaturedSection from "../Components/FeaturedSection"
import Subscription from "../Components/Subscription"
import FAQs from "../Components/FAQs"
import AskQuestions from "../Components/AskQuestions"
import SignUp from "../Components/SignUp"
import ContactUs from "../Components/ContactUs"
import Testimonial from "../Components/Testimonial"
import Footer from "../Components/Footer"

const Home = () => {
	return (
		<div className="bg-[#F1EEE9]">
			<Hero />
			<InfoSection />
			<ExclusiveDesign />
			<FeaturedSection />
			<Subscription />
			<FAQs />
			<AskQuestions />
			<SignUp />
			<ContactUs />
			<Testimonial />
			<Footer />
		</div>
	)
}

export default Home
