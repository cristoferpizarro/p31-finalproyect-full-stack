import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Container } from "react-bootstrap";
import ImageCarousel from "../component/ImageCarousel";
import "../../styles/logo.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

		return (
			<div>
				<p class="h2 text-center mt-4 mb-4"><img class="logo-img" src='https://cdn-icons-png.flaticon.com/512/3228/3228952.png'></img> Farming time</p>
				<ImageCarousel 
				image1={'https://images.pexels.com/photos/7728371/pexels-photo-7728371.jpeg'} 
				captionTitle1={'First slide label'} captionText1={'Nulla vitae elit libero, a pharetra augue mollis interdum.'} 
				image2={'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
				captionTitle2={'Second slide label'} captionText2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
				image3={'https://images.pexels.com/photos/4395374/pexels-photo-4395374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
				captionTitle3={'Third slide label'} captionText3={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
/>
			</div>
		);
};
