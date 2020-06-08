import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Dropdown = styled.div`
	width: 200px;
	position: absolute;

	margin-top: 75px;
	margin-left: 130px;
	background: white;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
`;

export const DropdownContents = styled(Link)`
	text-decoration: none;
	font-size: 15px;
	font-weight: 400;
	font-family: sans-serif;
	color: black;
	margin-left: 10px;
	margin-right: 10px;
	margin-top: 7px;
	color: gray;
	&:hover {
		color: black;
	}
`;

export const ProfileContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr;
`;
export const ProfilePicture = styled.img`
	width: 70px;
	height: 70px;
	border-radius: 100%;
`;
export const Links = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr;
	justify-content: space-around;
`;
export const HLine = styled.hr`
	width: 90%;
	margin: auto;
`;
