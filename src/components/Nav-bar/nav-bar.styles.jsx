import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const NavContainer = styled.div`
	max-width: 95vw;
	height: 5.5rem;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	margin: 0px auto;
	display: flex;
	flex-direction: row;
`;
export const Logo = styled(Link)`
	font-family: 'Noto Serif', serif;
	text-decoration: none;
	color: black;
	font-weight: 900;
	font-size: 40px;
	padding: 0px 25px;
	&:active {
		transform: translateX(20px);
	}
`;

export const LogoContainer = styled.div`
	width: 75%;
`;

export const UserContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
	/* border: 1px solid black; */
	width: 25%;
`;
