/** @format */

import React, { useState } from "react";
import "./loginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

const LoginPage = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				navigate("/");
			})
			.catch((error) => alert(error.message));
	};

	const register = (e) => {
		e.preventDefault();

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					navigate("/");
				}
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login-page">
			<Link to="/">
				<img
					className="login-page-logo"
					src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/210px-Amazon_logo.svg.png"
					alt="amazon-logo"
				/>
			</Link>
			<div className="login-page-container">
				<h1>Sign-in</h1>
				<form>
					<h5>E-mail</h5>
					<input
						className="login-page-input"
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						className="login-page-input"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						type="submit"
						onClick={signIn}
						className="login-page-sign-in-button">
						Sign-in
					</button>
				</form>
				<p>
					By signing-in you agree to AMAZON's FAKE CLONE Conditions of Use &
					Sale. Please see our Privacy Notice, our Cookies Notice and our
					Interest Based Ads Notice.
				</p>
				<button onClick={register} className="login-page-register-button">
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
};

export default LoginPage;
