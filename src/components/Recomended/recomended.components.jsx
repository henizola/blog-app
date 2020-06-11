import React from 'react';
import {
	RecomendedContainer,
	CoverPicture,
	Name,
	Description,
	PostDescription,
} from './recomended.styles';

const Recomended = ({ post }) => {
	return (
		<RecomendedContainer
			to={{
				pathname: '/read',
				data: post,
			}}
		>
			<CoverPicture src={post.posts.img} />
			<Name>{post.description}</Name>
			<Description>{post.posts.highlight}</Description>
			<Description>{post.name}</Description>
			<PostDescription>
				{post.posts.length} min read {post.published}
			</PostDescription>
		</RecomendedContainer>
	);
};
export default Recomended;
