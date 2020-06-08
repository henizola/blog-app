import React, { useContext } from 'react';
import {
	Dropdown,
	DropdownContents,
	ProfilePicture,
	ProfileContainer,
	Links,
	HLine,
} from './profile.styles';
import CurrentUser from '../../context/current-user/user.context';

const Profile = ({ user }) => {
	const UserData = useContext(CurrentUser);
	return (
		<Dropdown>
			<ProfileContainer>
				<ProfilePicture src={UserData.img} />
				<Links>
					<DropdownContents to='profile'>
						{UserData.firstName}
					</DropdownContents>
					<DropdownContents to='profile'>
						{UserData.email}
					</DropdownContents>
				</Links>
			</ProfileContainer>
			<DropdownContents to='profile'>Become a member</DropdownContents>
			<HLine />
			<DropdownContents to='sign-in'>New Story</DropdownContents>
			<DropdownContents to='profile'>Stories</DropdownContents>
			<DropdownContents to='profile/posts'>Series</DropdownContents>
			<HLine />
			<DropdownContents to='/partners'>
				Medium partner Programs
			</DropdownContents>
			<HLine />
			<DropdownContents to='reading-list'>Reading List</DropdownContents>
			<DropdownContents to='publications'>Publications</DropdownContents>
			<DropdownContents to='customize'>
				Customize your interest
			</DropdownContents>
			<HLine />
			<DropdownContents to='profiles'>Profile</DropdownContents>
			<DropdownContents to='settings'>Settings</DropdownContents>
			<DropdownContents to='help'>Help</DropdownContents>
			<DropdownContents to='Sign-in'>Sign-out</DropdownContents>
		</Dropdown>
	);
};

export default Profile;
