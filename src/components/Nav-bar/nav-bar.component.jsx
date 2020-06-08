import React, { useState } from 'react';
import {
	NavContainer,
	LogoContainer,
	Logo,
	UserContainer,
	Header,
	Navigator,
	JumpTo,
} from './nav-bar.styles';
import User from '../user/user.component';
import ProfileContext from '../../context/profile/profile.context';
const NavBar = () => {
	const [hidden, setHidden] = useState(true);
	const toggleHidden = () => setHidden(!hidden);
	return (
		<NavContainer>
			<Header>
				<LogoContainer>
					<Logo to='/'>Medium</Logo>
				</LogoContainer>
				<UserContainer>
					<ProfileContext.Provider value={{ hidden, toggleHidden }}>
						<User />
					</ProfileContext.Provider>
				</UserContainer>
			</Header>
			<Navigator>
				<JumpTo href='#home'>home</JumpTo>
				<JumpTo href='#popular'> popular</JumpTo>
				<JumpTo href='#foryou'>for you </JumpTo>
			</Navigator>
		</NavContainer>
	);
};

export default NavBar;
