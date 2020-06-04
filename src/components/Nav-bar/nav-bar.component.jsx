import React from 'react';
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

const NavBar = () => {
	return (
		<NavContainer>
			<Header>
				<LogoContainer>
					<Logo to='/'>Medium</Logo>
				</LogoContainer>
				<UserContainer>
					<User />
				</UserContainer>
			</Header>
			<Navigator>
				<JumpTo name='single-post'>home</JumpTo>
				<JumpTo name='popular'> popular</JumpTo>
				<JumpTo name='foryou'>for you </JumpTo>
			</Navigator>
		</NavContainer>
	);
};

export default NavBar;
