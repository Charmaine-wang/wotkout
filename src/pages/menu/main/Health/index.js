import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../../context'
import TopIcons from '../../../../components/TopIcons'

const StyledHealth = styled.div`

`;

const PageHealth = () => {
	const {isAuth} = useContext(UserContext);

	useEffect(() => {

			console.log(isAuth);

	}, [isAuth]);

	return (
		<StyledHealth>
			<TopIcons iconSrc='images/heart.png'/>

			{isAuth && <h2>Welcome</h2>}
			<h1>Health</h1>
		</StyledHealth>
	);
};

export default PageHealth;
