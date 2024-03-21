/** @format */

import React from "react";
import "./home.css";
import Header from "../header/header";
import Product from "../product/product";

const Home = () => {
	return (
		<div className="home">
			<div className="home-container">
				<Header />

				<img
					className="home-image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt="Home-Img"></img>
				<div className="home-row">
					<Product
						id="1"
						title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
						price={11.96}
						image="https://m.media-amazon.com/images/I/71iHOn46wDS._SY425_.jpg"
						rating={5}
					/>
					<Product
						id="2"
						title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
						price={239.0}
						rating={4}
						image="https://m.media-amazon.com/images/I/510uEUwLn-L._SX425_.jpg"
					/>
				</div>
				<div className="home-row">
					<Product
						id="3"
						title="Samsung Galaxy Watch6 LTE (40mm, Gold, Compatible with Android only) | Introducing BP & ECG Features"
						price={357.21}
						rating={4}
						image="https://m.media-amazon.com/images/I/718o9EstbbL._SX522_.jpg"
					/>

					<Product
						id="4"
						title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Grey)"
						price={66.36}
						rating={4}
						image="https://m.media-amazon.com/images/I/71xaI+n5CSL._SY450_.jpg"
					/>

					<Product
						id="5"
						title="Apple iPad Pro 11″ (4th Generation): with M2 chip, 128GB, 12MP front/12MP and 10MP Back Cameras, Face ID, Space Grey"
						price={964.25}
						rating={4}
						image="https://m.media-amazon.com/images/I/81gC7frRJyL._SX569_.jpg"
					/>
				</div>

				<div className="home-row">
					<Product
						id="6"
						title="Acer Nitro Ultrawide Xv340Ckp 34 Inch (86.36 Cm) Led IPS Qhd 3440 X 1440 Pixels Gaming Monitor, Black"
						price={464.61}
						rating={4}
						image="https://m.media-amazon.com/images/I/81yhmZICzCL._SX522_.jpg"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
