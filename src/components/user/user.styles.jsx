import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Pages = styled(Link)`
	fill: gray;
	margin: auto;

	&:hover {
		fill: black;
	}
`;
export const ProfilePhoto = styled.img`
	width: 3rem;
	height: 3rem;
	border-radius: 100%;
	margin: auto;
	cursor: pointer;
`;
