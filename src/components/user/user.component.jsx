import React, { useContext } from 'react';
import { ReactComponent as BookMark } from '../../assets/bookmarks-24px (1).svg';
import { ReactComponent as Alert } from '../../assets/notification_important-24px.svg';
import { Pages, ProfilePhoto, UserProfileContainer } from './user.styles';
import CustomButton from '../custom-button/custom-button.component';

import Profile from '../profile/profile.components';

import ProfileContext from '../../context/profile/profile.context';

import CurrentUser from '../../context/current-user/user.context';

import Search from '../search/search.component';

import Notification from '../notification/notification.component';
const User = () => {
	const { profileHidden } = useContext(ProfileContext);
	const { toggleProfileHidden } = useContext(ProfileContext);
	const { notificationHidden } = useContext(ProfileContext);
	const { toggleNotificationHidden } = useContext(ProfileContext);
	const UserData = useContext(CurrentUser);
	return (
		<UserProfileContainer>
			<Search />
			<Pages to='/bookmarks'>
				<BookMark />
			</Pages>
			{console.log(notificationHidden)}
			{console.log(toggleProfileHidden)}
			{notificationHidden ? null : <Notification />}
			<Pages onClick={toggleNotificationHidden}>
				<Alert />
			</Pages>
			<CustomButton title={'Upgrade'} />
			<ProfilePhoto
				src={UserData.img}
				alt='user'
				onClick={toggleProfileHidden}
			/>
			{profileHidden ? null : <Profile />}
		</UserProfileContainer>
	);
};

export default User;
