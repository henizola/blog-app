import React, { useContext } from 'react';
import {
	BlogListContainer,
	Lists,
	SinglePost,
	SavedBlogs,
} from './Blog-list.styles';
import { PostContext } from '../../context/post/post.context';
import Post from '../post/posts.component';
import { ReactComponent as Saved } from '../../assets/bookmark-24px.svg';
import { HorizontalLine } from '../../pages/book-marks/bookmarks.styles';
const BlogList = () => {
	const { posts } = useContext(PostContext);
	return (
		<BlogListContainer>
			<Lists>
				<SinglePost id='single-post'>
					{posts.map((element, index) => (
						<Post post={element} />
					))}
				</SinglePost>
			</Lists>
			<SavedBlogs>
				<SinglePost id='single-post'>
					<h1 style={{ marginLeft: '20%' }}>Reading List</h1>
					<Saved />
					{posts
						.filter((element, index) => element.posts.saved)
						.map((element, index) => (
							<Post post={element} />
						))}
				</SinglePost>
			</SavedBlogs>
		</BlogListContainer>
	);
};
export default BlogList;
