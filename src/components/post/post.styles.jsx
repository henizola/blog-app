import styled from 'styled-components';

export const PostContainer = styled.div`
	width: 100%;
	height: 150px;
	overflow: hidden;
	/* border: 1px solid black; */
	display: grid;
	grid-template-columns: 100px 1fr;
	cursor: pointer;
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
export const Likes = styled.div`
	display: flex;
	justify-content: space-between;
	width: 30px;
	/* border: 1px solid black; */
`;
