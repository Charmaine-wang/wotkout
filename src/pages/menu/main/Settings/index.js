import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../../context'
import TopIcons from '../../../../components/TopIcons'

const StyledSettings = styled.div`

`;

const PageSettings = () => {

	useEffect(() => {

	}, []);

	return (
		<StyledSettings>
			<TopIcons iconSrc='images/settings.png'/>
			<h1>settings</h1>
		</StyledSettings>
	);
};

export default PageSettings;
