import React from 'react';
import NavBar from './components/Nav-bar/nav-bar.component';
import HomePage from './pages/home-page/home-page.component';
import { Route } from 'react-router-dom';

import Profile from './pages/profile/profile.component';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Route exact path='/' component={HomePage} />
			<Route exact path='/profile' component={Profile} />
		</div>
	);
}

export default App;
