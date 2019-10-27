import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardSlider from "./CardSlider";

const Wrapper = styled.div`
	width: 100%;
	top: 17%;
`;

const StyledSliderComponent = styled.div`
	& > .fixed-container {
		height: 370px;
		& > div > div {
			/* overflow: scroll; */
			::-webkit-scrollbar {
				display: none;
			}
			& > div {
				/* margin: 0 0.5% 0 0; */
			}
		}
	}
	.slick-slide {
		transform: scale(0.8);
		transition: transform 0.2s ease-in-out;
		width: 230px;
		height: 370px;
	}
	.slick-slide.slick-center {
		transform: scale(1);
	}
	.slick-slider {
		height: 100% !important;
		overflow: hidden;
	}
	div > div > .slick-list {
		height: 370px;
		width: 100%;
		/* padding: 0 20% 0 0; */
		& > div > div > div > div {
			height: 370px;
		}
	}
`;


const WelcomingWrapper = styled.p`
	margin-top: 4vh;

	> p:nth-child(1) {
		color: white;
		font-size: 32px;
		text-align: center;
		font-weight: 300;

	}
	> p:nth-child(2) {
		color: white;
		font-size: 24px;
		text-align: center;
		margin-top: 10px;
	}
`;


const SliderComponent = () => {
  var settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		centerMode: true,
		centerPadding: 0,
		swipe: true,
		variableWidth: true,
		adaptiveHeight: true
	};

	return (
		<Wrapper>
			<StyledSliderComponent>
				<div className="fixed-container">
					<Slider {...settings}>
						<CardSlider
							cardHref="/timer"
							cardName="TIMER"
							cardImg="/images/timer.png"
						/>
						<CardSlider
							cardHref="/moves"
							cardName="MOVES"
							cardImg="/images/moves.png"
						/>
						<CardSlider
							cardHref="/health"
							cardName="HEALTH"
							cardImg="/images/heart.png"
						/>
					</Slider>
				</div>
			</StyledSliderComponent>
			<WelcomingWrapper>
				<p> Hi Charmaine </p>
				<p> Time for workout </p>
			</WelcomingWrapper>
		</Wrapper>
	);
};

export default SliderComponent;