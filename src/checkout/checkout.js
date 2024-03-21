/** @format */

import React from "react";
import "./checkout.css";

import { useStateValue } from "../stateProvider/stateprovider";
import Header from "../header/header";
import Subtotal from "./subtotal/subtotal";
import CheckoutProduct from "./checkoutProduct/checkoutProduct";

const Checkout = () => {
	const [{ basket, user }, dispatch] = useStateValue();
	return (
		<>
			<Header />
			<div className="checkout">
				<div className="checkout-left">
					<img
						className="checkout-ad"
						src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
						alt="Amazon-Adv"
					/>
					<div>
						<h3>Hello, {user?.email}</h3>
						<h2 className="checkout-title">Your Shopping Basket</h2>
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				<div className="checkout-right">
					<Subtotal />
				</div>
			</div>
		</>
	);
};

export default Checkout;
