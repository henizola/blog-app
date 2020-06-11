import React, { useContext } from 'react';
import {
	ProfileContainer,
	UserDisplay,
	UserName,
	ProfilePhoto,
	AboutContainer,
	Description,
} from './profile.styles';
import CurrentUser from '../../context/current-user/user.context';
import CustomButton from '../../components/custom-button/custom-button.component';
const Profile = () => {
	const UserData = useContext(CurrentUser);

	return (
		<ProfileContainer>
			<UserDisplay>
				<AboutContainer>
					<UserName>
						{UserData.firstName} {UserData.lastName}
					</UserName>
					<CustomButton title=' edit-profile' />
					<span>{UserData.following} Following</span>
				</AboutContainer>

				<ProfilePhoto src={UserData.img} />
			</UserDisplay>
			<Description>
				{UserData.firstName} {UserData.lastName} hasn’t been active on
				Medium yet. Check back later to see their stories, claps, and
				highlights.
			</Description>
		</ProfileContainer>
	);
};

export default Profile;
