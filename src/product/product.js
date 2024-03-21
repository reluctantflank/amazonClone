/** @format */

import React from "react";
import "./product.css";
import { useStateValue } from "../stateProvider/stateprovider";

const Product = ({ id, title, image, price, rating }) => {
	const [{ basket }, dispatch] = useStateValue();

	const addToBasket = () => {
		// action to add item into basket in Redux store

		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};
	return (
		<div className="product">
			<div className="product-info">
				<p>{title}</p>
				<p className="product-price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product-rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
				</div>
			</div>
			<img className="product-image" src={image} alt={title} />
			<button className="add-to-basket-button" onClick={addToBasket}>
				Add to Basket
			</button>
		</div>
	);
};

export default Product;
