/** @format */

import React from "react";
import "./checkoutProduct.css";
import { useStateValue } from "../../stateProvider/stateprovider";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
	const [{ basket }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		// remove item from the basket
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};

	return (
		<div className="checkout-product">
			<img className="checkout-product-image" src={image} alt={title} />
			<div className="checkout-product-info">
				<p className="checkout-product-title">{title}</p>
				<p className="checkout-product-price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkout-product-rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
				</div>
				<button
					className="checkout-product-remove-button"
					onClick={removeFromBasket}>
					Remove from Basket
				</button>
			</div>
		</div>
	);
};

export default CheckoutProduct;
