import React, { useContext } from 'react';
import {
	HomePageContainer,
	SinglePost,
	Populars,
	ForYou,
	Home,
	Body,
	HorizontalLine,
} from './home-page.styles';
import { PostContext } from '../../context/post/post.context';
import Post from '../../components/post/posts.component';
import Recomended from '../../components/Recomended/recomended.components';
import BlogList from '../../components/blog-list/blog-list.component';
const HomePage = () => {
	const { posts } = useContext(PostContext);
	return (
		<HomePageContainer>
			<Home>
				<Populars>
					<Recomended post={posts[3]} />
				</Populars>
				<SinglePost id='single-post'>
					{posts
						.filter(
							(element, index) => element.posts.likes.length < 4
						)
						.map((element, index) => (
							<Post post={element} />
						))}
				</SinglePost>
				<ForYou>
					<Recomended post={posts[4]} />
				</ForYou>
			</Home>
			<HorizontalLine />
			<Body>
				<BlogList id='#foryou' />
			</Body>
		</HomePageContainer>
	);
};
export default HomePage;
