import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const PostContainer = styled(Link)`
	width: 100%;
	height: 150px;
	overflow: hidden;
	/* border: 1px solid black; */
	display: grid;
	grid-template-columns: 100px 1fr;
	cursor: pointer;
	text-decoration: none;
`;
export const Title = styled.h4`
	color: black;
`;
export const CoverPicture = styled.img`
	width: 100px;
	height: 100px;
`;
export const Header = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 10px;
`;
export const NameTag = styled.span`
	color: #000;
`;
export const PostDescription = styled.span`
	width: 70%;
	margin-top: 0px;
	color: black;
`;
