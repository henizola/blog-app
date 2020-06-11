import styled from 'styled-components';

export const HomePageContainer = styled.div`
	width: 90%;
	height: 100vh;
`;

export const SinglePost = styled.div`
	grid-area: populars;
	max-height: 72%;
	overflow: hidden;
`;
export const Populars = styled.div`
	grid-area: single-post;
	max-height: 72%;
`;
export const ForYou = styled.div`
	grid-area: for-you;
	max-height: 72%;
`;
export const Home = styled.div`
	height: 100vh;
	width: 100%;
	display: grid;
	grid-template-columns: 40% 1fr 25%;
	grid-template-areas: 'single-post populars for-you';
	margin-top: 10px;
	grid-gap: 10px;
`;

export const Body = styled.div`
	width: 100%;
	margin-top: 20px;
`;

export const HorizontalLine = styled.hr`
	width: 90vw;
	margin: auto;
`;
