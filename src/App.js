/** @format */

import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Checkout from "./checkout/checkout";
import Home from "./home/home";
import LoginPage from "./loginPage/loginPage";
import { useStateValue } from "./stateProvider/stateprovider";
import { auth } from "./firebase/firebase";

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			// console.log("The user is ", authUser);

			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	});
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
