import React from 'react';
import {
	PostContainer,
	Title,
	CoverPicture,
	Header,
	NameTag,
	Likes,
} from './post.styles';
import { ReactComponent as Like } from '../../assets/favorite_border-black-18dp.svg';
const Post = ({ post }) => {
	return (
		<PostContainer>
			<CoverPicture src={post.posts.img} />
			<Header>
				<Title>{post.description}</Title>
				<NameTag>by : {post.name}</NameTag>
				<NameTag>posted : {post.published}</NameTag>
				<Likes>
					<Like />
					<NameTag>{post.posts.likes.length}</NameTag>
				</Likes>
			</Header>
		</PostContainer>
	);
};
export default Post;
