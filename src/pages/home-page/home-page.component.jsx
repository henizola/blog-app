import React, { useContext } from 'react';
import {
	HomePageContainer,
	SinglePost,
	Populars,
	ForYou,
	Home,
	Body,
} from './home-page.styles';
import { PostContext } from '../../context/post/post.context';
import Post from '../../components/post/posts.component';
import Recomended from '../../components/Recomended/recomended.components';
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
			<Body>
				<h1 id='foryou'>body goes here</h1>
			</Body>
		</HomePageContainer>
	);
};
export default HomePage;
