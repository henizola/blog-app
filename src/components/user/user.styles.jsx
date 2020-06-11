import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Pages = styled(Link)`
	fill: gray;
	margin: auto;
	margin-right: 30px;

	&:hover {
		fill: black;
	}
`;
export const ProfilePhoto = styled.img`
	width: 3rem;
	height: 3rem;
	border-radius: 100%;
	margin: auto;
	cursor: pointer;
	margin-left: 30px;
`;
export const UserProfileContainer = styled.div`
	width: 100%;
	height: 100%;
	margin: auto;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin-left: -20px;
`;
