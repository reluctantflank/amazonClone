/** @format */

import React from "react";
import "./payment.css";
import Header from "../../header/header";
import { useStateValue } from "../../stateProvider/stateprovider";
import CheckoutProduct from "../checkoutProduct/checkoutProduct";
import { Link } from "react-router-dom";

const Payment = () => {
	const [{ basket, user }, dispatch] = useStateValue();
	return (
		<div>
			<Header />
			<div className="payment">
				<div className="payment-container">
					<h1>
						Checkout (<Link to="/checkout">{basket?.length} items</Link>)
					</h1>
					{/* Payment section - delivery address */}
					<div className="payment-section">
						<div className="payment-title">
							<h3>Delivery Address</h3>
						</div>
						<div className="payment-address">
							<p>{user?.email}</p>
							<p>123 lane</p>
							<p>new delhi</p>
						</div>
					</div>

					{/* Payment section - review Items */}
					<div className="payment-section">
						<div className="payment-title">
							<h3>Review items and delivery</h3>
						</div>
						<div className="payment-items">
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

					{/* Payment section - Payment method*/}
					<div className="payment-section">
						<div className="payment-title">
							<h3>Payment Method</h3>
						</div>
						<div className="payment-details"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
