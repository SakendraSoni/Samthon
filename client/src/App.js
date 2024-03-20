import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Customization from "./Pages/Customization"
import Login from "./Pages/Login"
import SignUpPage from "./Pages/SignUpPage"
import Catagories from "./Pages/Catagories"
import Overview from "./Pages/Overview"

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/customization" element={<Customization />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/SignUpPage" element={<SignUpPage />} />
				<Route path="/Catagories" element={<Catagories />} />
				<Route path="/Overview" element={<Overview />} />
			</Routes>
		</div>
	)
}

export default App
