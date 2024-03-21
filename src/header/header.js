/** @format */

import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../stateProvider/stateprovider";
import { auth } from "../firebase/firebase";

const Header = () => {
	const [{ basket, user }, dispatch] = useStateValue();

	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div className="header">
			<Link to="/">
				<img
					className="header-logo"
					src="https://pngimg.com/d/amazon_PNG11.png"
					alt="amazon-logo"
				/>
			</Link>

			<div className="header-search-bar">
				<input className="header-search-input" type="text"></input>
				<SearchIcon className="header-search-icon" />
			</div>
			<div className="header-nav">
				<Link to={!user && "/login"}>
					<div onClick={handleAuthentication} className="header-option">
						<span className="header-option-lineOne">
							Hello,{user ? user.email : "Guest"}
						</span>

						<span className="header-option-lineTwo">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>
				<div className="header-option">
					<span className="header-option-lineOne">Returns </span>
					<span className="header-option-lineTwo">& Orders</span>
				</div>
				<div className="header-option">
					<span className="header-option-lineOne">Your </span>
					<span className="header-option-lineTwo">Prime</span>
				</div>

				<Link to="/checkout">
					<div className="header-option-basket">
						<ShoppingBasketIcon />
						<span className="header-option-lineTwo header-basket-count">
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
