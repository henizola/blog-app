import styled from 'styled-components';

import Post from '../../components/post/posts.component';
export const HomePageContainer = styled.div`
	width: 90%;
	height: 100vh;
	display: grid;
	grid-template-columns: 40% 1fr 25%;
	grid-template-areas: 'single-post populars for-you';
	margin-top: 10px;
	grid-gap: 10px;
`;

export const SinglePost = styled.div`
	grid-area: populars;
	height: 70%;
	border-bottom: 1px solid black;
`;
export const Populars = styled.div`
	grid-area: single-post;
	height: 70%;
	border-bottom: 1px solid black;
`;
export const ForYou = styled.div`
	grid-area: for-you;
	height: 70%;
	border-bottom: 1px solid black;
`;
