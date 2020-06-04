import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search-24px (1).svg';
import { ReactComponent as BookMark } from '../../assets/bookmarks-24px (1).svg';
import { ReactComponent as Alert } from '../../assets/notification_important-24px.svg';
import { Pages, ProfilePhoto } from './user.styles';
import CustomButton from '../custom-button/custom-button.component';
const User = () => {
	return (
		<React.Fragment>
			<Pages to='/search'>
				<SearchIcon />
			</Pages>
			<Pages to='/bookmarks'>
				<BookMark />
			</Pages>
			<Pages to='/notification'>
				<Alert />
			</Pages>
			<CustomButton title={'Upgrade'} />
			<ProfilePhoto src='./user1.jpeg' alt='user' />
		</React.Fragment>
	);
};

export default User;
