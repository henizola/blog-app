import React, { useContext } from 'react';
import { ReactComponent as BookMark } from '../../assets/bookmarks-24px (1).svg';
import { ReactComponent as Alert } from '../../assets/notification_important-24px.svg';
import { Pages, ProfilePhoto, UserProfileContainer } from './user.styles';
import CustomButton from '../custom-button/custom-button.component';

import Profile from '../profile/profile.components';

import ProfileContext from '../../context/profile/profile.context';

import CurrentUser from '../../context/current-user/user.context';

import Search from '../search/search.component';

const User = () => {
	const { hidden } = useContext(ProfileContext);
	const { toggleHidden } = useContext(ProfileContext);
	const UserData = useContext(CurrentUser);
	return (
		<UserProfileContainer>
			<Search />
			<Pages to='/bookmarks'>
				<BookMark />
			</Pages>
			<Pages to='/notification'>
				<Alert />
			</Pages>
			<CustomButton title={'Upgrade'} />
			<ProfilePhoto
				src={UserData.img}
				alt='user'
				onClick={toggleHidden}
			/>
			{hidden ? null : <Profile />}
		</UserProfileContainer>
	);
};

export default User;
