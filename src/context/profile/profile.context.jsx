import { createContext } from 'react';

export const ProfileContext = createContext({
	profileHidden: true,
	toggleProfileHidden: () => {},
	notificationHidden: true,
	toggleNotificationHidden: () => {},
});
export default ProfileContext;
