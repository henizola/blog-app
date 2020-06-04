import React from 'react';
import {
	RecomendedContainer,
	CoverPicture,
	Name,
	Description,
} from './recomended.styles';

const Recomended = ({ post }) => {
	return (
		<RecomendedContainer>
			<CoverPicture src={post.posts.img} />
			<Name>{post.description}</Name>
			<Description>{post.posts.highlight}</Description>
			<Description>{post.name}</Description>
		</RecomendedContainer>
	);
};
export default Recomended;
