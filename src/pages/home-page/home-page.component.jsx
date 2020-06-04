import React, { useContext } from 'react';
import {
	HomePageContainer,
	SinglePost,
	Populars,
	ForYou,
} from './home-page.styles';
import { UserContext } from '../../context/user/user.context';
import Post from '../../components/post/posts.component';
import Recomended from '../../components/Recomended/recomended.components';
const HomePage = () => {
	const { users } = useContext(UserContext);
	return (
		<HomePageContainer>
			<Populars>
				<Recomended post={users[3]} />
			</Populars>
			<SinglePost name='single-post'>
				<Post post={users[0]} />
				<Post post={users[1]} />
				<Post post={users[2]} />
			</SinglePost>
			<ForYou>
				<Recomended post={users[4]} />
			</ForYou>
		</HomePageContainer>
	);
};
export default HomePage;
