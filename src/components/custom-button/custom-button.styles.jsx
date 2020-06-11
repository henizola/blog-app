import styled from 'styled-components';

export const Button = styled.button`
	height: 2rem;
	background-color: transparent;
	border: 0.5px solid gray;
	border-radius: 5px;
	padding-left: 8px;
	padding-right: 8px;
	margin: auto;
	color: gray;
	&:hover {
		color: black;
		border: 0.5px solid black;
	}
	&:focus {
		outline: 0;
	}
`;
