import React, { useState, createContext } from 'react';
import { usersData } from './posts';
export const UserContext = createContext();

export const UserProvider = props => {
	let [users] = useState(usersData);

	return (
		<UserContext.Provider
			value={{
				users,
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};
