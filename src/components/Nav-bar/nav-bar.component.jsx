import React from 'react';
import {
	NavContainer,
	LogoContainer,
	Logo,
	UserContainer,
} from './nav-bar.styles';
import User from '../user/user.component';

const NavBar = () => {
	return (
		<NavContainer>
			<LogoContainer>
				<Logo to='/'>Medium</Logo>
			</LogoContainer>
			<UserContainer>
				<User />
			</UserContainer>
		</NavContainer>
	);
};

export default NavBar;
