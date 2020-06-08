import { createContext } from 'react';

export const ProfileContext = createContext({
	hidden: true,
	toggleHidden: () => {},
});
export default ProfileContext;
