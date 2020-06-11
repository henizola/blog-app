import styled from 'styled-components';

export const BlogListContainer = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-template-areas: 'list saved';
`;

export const Lists = styled.div`
	grid-area: list;
	display: flex;
	flex-direction: column;
	background-color: rgba(0, 0, 0, 0.1);
`;
export const SinglePost = styled.div`
	width: 100%;
	padding-left: 80px;
	padding-top: 50px;
`;
export const SavedBlogs = styled.div`
	grid-area: saved;
`;
