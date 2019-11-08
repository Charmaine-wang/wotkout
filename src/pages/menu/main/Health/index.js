import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useAuth } from "../../../../authcontext";

import TopIcons from '../../../../components/TopIcons'
import HealthComponent from '../../../../components/HealthComponent';
import BodyComponent from '../../../../components/BodyComponent';
import FadedBackground from '../../../../components/FadedBackground';

const StyledHealth = styled.div`
	height: calc(100vh - 54px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: space-between;
`;

const HealthWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 10vh;
	width: 100%;
`;

const BodyWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
`;

const BMIWrapper = styled.div`
	width: 100%;
	height: 10vh;
	background-color: rgba(0,0,0, 0.8);
	display: flex;
	flex-directin: row;
	justify-content: flex-end;
	align-items: center;
	padding: 0 34px;
	> p:nth-child(1) {
		font-size: 24px;
		color: white;
		opacity: 0.8;
		margin-right: 10px;
	}
	> p:nth-child(2) {
		font-size: 40px;
		color: white;
	}
`;

const PageHealth = () => {
	// const {isAuth} = useContext(UserContext);
const { authUser, authLoading } = useAuth();

const handleChange = () => {

}
console.log(authUser);
	useEffect(() => {
			// console.log(isAuth);
	}, []);

	const BMI = Number(
		(authUser.weight / Math.pow(authUser.length, 2)) * 10000
	).toFixed(1);


	return (
		<div>
			<FadedBackground opacity={"0.6"} />
			<TopIcons iconSrc="/images/heart.png" />
			<StyledHealth>
				<HealthWrapper>
					<HealthComponent
						title={"Total activity today"}
						firstValue={"3.5" + " h"}
						secondValue={"9" + " km"}
					/>
					<HealthComponent
						title={"Calories burned"}
						secondValue={"570" + " kcal"}
					/>
					<HealthComponent
						title={"Rekommended hydration"}
						secondValue={"6" + " glases"}
					/>
				</HealthWrapper>

				<div>
					<BodyWrapper>
						<BodyComponent
							type="text"
							title="Weight"
							placeholder={authUser.weight}
							value={authUser.weight}
							unit={"kg"}
							onChange=""
						/>
						<BodyComponent
							type="text"
							title={"Length"}
							placeholder={authUser.length}
							value={authUser.length}
							unit={"cm"}
							onChange=""
						/>
					</BodyWrapper>
					<BMIWrapper>
						<p> BMI </p>
						<p>{BMI} </p>
					</BMIWrapper>
				</div>
			</StyledHealth>
		</div>
	);
};

export default PageHealth;
