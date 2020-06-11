import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const RecomendedContainer = styled(Link)`
	width: 100%;
	/* border: 2px solid black; */
	text-decoration: none;
	height: 70%;
	display: flex;
	flex-direction: column;
	color: black;
`;
export const CoverPicture = styled.img`
	width: 90%;
	margin-left: 30px;
`;
export const Name = styled.h2`
	color: black;
	margin-left: 30px;
	width: 85%;
	text-align: center;

	font-size: 20px;
	font-weight: 600;
`;
export const Description = styled.span`
	width: 70%;
	margin: auto;
	margin-top: 0px;
`;
export const PostDescription = styled.span`
	width: 70%;
	margin: auto;
	margin-top: 0px;
	color: black;
`;
