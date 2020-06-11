import React from 'react';
import { ReadContainer, PostImg, Blog, Title } from './read-post.styled';

const ReadBlog = props => {
	const { data } = props.location;
	return (
		<ReadContainer>
			{console.log(props.location)}
			<Title>{data.description}</Title>
			<PostImg src={data.posts.img} />

			<Blog>{data.posts.content}</Blog>
		</ReadContainer>
	);
};
export default ReadBlog;
