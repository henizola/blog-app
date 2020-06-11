import styled from 'styled-components';

export const ProfileContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
`;
export const UserDisplay = styled.div`
	width: 70%;
	height: 100px;
	margin: 60px 20%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-content: space-between;
`;
export const UserName = styled.h2`
	color: black;
	text-transform: lowercase;
	/* margin: auto; */
`;
export const ProfilePhoto = styled.img`
	width: 8rem;
	height: 8rem;
	border-radius: 100%;
	margin: auto;
	cursor: pointer;
	margin-left: 30px;
`;

export const AboutContainer = styled.div`
	width: 55%;
	height: 50px;
	display: grid;
	grid-template-columns: 170px 1fr;
	/* grid-gap: 10px; */
`;

export const Description = styled.div`
	width: 60%;
	margin: 20px auto;
`;
