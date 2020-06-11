import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const NavContainer = styled.div`
	max-width: 95vw;
	height: 7rem;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	margin: 0px auto;
	display: flex;
	flex-direction: column;
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
	width: 50%;
`;
export const Header = styled.div`
	max-width: 100%;
	display: flex;
	flex-direction: row;
`;
export const Navigator = styled.div`
	display: inline-block;
`;
export const JumpTo = styled.a`
	text-decoration: none;
	color: gray;
	text-transform: uppercase;
	font-size: 16px;
	font-weight: 400;
	cursor: pointer;
	margin-left: 10px;
	&:hover {
		color: black;
	}
`;
