import React from 'react';
import {
	PostContainer,
	Title,
	CoverPicture,
	Header,
	NameTag,
	PostDescription,
} from './post.styles';
const Post = ({ post }) => {
	return (
		<PostContainer
			to={{
				pathname: '/read',
				data: post,
			}}
		>
			<CoverPicture src={post.posts.img} id='home' />
			<Header>
				<Title>{post.description}</Title>
				<NameTag>by : {post.name}</NameTag>

				<PostDescription>
					{post.posts.length} min read {post.published}
				</PostDescription>
			</Header>
		</PostContainer>
	);
};
export default Post;
