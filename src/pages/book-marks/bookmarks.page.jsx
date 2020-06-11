import React, { useContext } from 'react';

import { PostContext } from '../../context/post/post.context';

import { BookmarkContainer, Title, Catagories } from './bookmarks.styles';
import Post from '../../components/post/posts.component';

const Bookmark = () => {
	const { posts } = useContext(PostContext);

	return (
		<BookmarkContainer>
			<Title>Reading List</Title>
			<Catagories>saved</Catagories>
			{posts
				.filter((element, index) => element.posts.saved)
				.map((element, index) => {
					return <Post post={element} />;
				})}
		</BookmarkContainer>
	);
};
export default Bookmark;
