import React from 'react';
import styled from 'styled-components';

const BubbleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	> img {
		width: 22px;
		opacity: 0.25;
		margin-bottom: 3px;
	}
`;

const StyledBubble = styled.div`
  width: ${props => props.diameter};
	height: ${props => props.diameter};
	background-color: rgba(255,255,255, 0.25);
	border-radius: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	> img {
		width: 22px;
		opacity: 0.2;
	}
	> p:nth-child(1) {
		font-size: 22px;
		color: white;
	}
	> p:nth-child(2) {
		font-size: 14px;
		color: rgba(255,255,255, 0.7);
	}
`;

const Bubble = ({ ...props }) => {
  return (
		<BubbleContainer>
			<img src={props.icon} alt="icon" />
	    <StyledBubble {...props}>
				<p> {props.hourOrKm} </p>
				<p> {props.unit} </p>
			</StyledBubble>
		</BubbleContainer>
  );
};
export default Bubble;