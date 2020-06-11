import styled from 'styled-components';

export const SearchContainer = styled.div`
	display: flex;
	position: relative;
`;
export const SeachField = styled.input`
	border: none;
	display: flex;
	border-radius: 50px;
	height: 30px;
	width: 60px;
	color: black;
	font-size: 20px;
	margin-top: 10px;
	transition: width 300ms ease-in-out;
	&:focus-within {
		width: 150px;
		outline: 0;
		color: black;
		height: 50px;
	}
`;
