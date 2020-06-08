import React, { useState, createContext } from 'react';
import { postData } from './posts';
export const PostContext = createContext();

export const PostProvider = props => {
	let [posts] = useState(postData);

	return (
		<PostContext.Provider
			value={{
				posts,
			}}
		>
			{props.children}
		</PostContext.Provider>
	);
};
