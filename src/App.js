import React from 'react';
import NavBar from './components/Nav-bar/nav-bar.component';
import HomePage from './pages/home-page/home-page.component';
import { Route } from 'react-router-dom';

import Profile from './pages/profile/profile.component';
import ReadBlog from './pages/Read-post/read-post.page';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Route exact path='/' component={HomePage} />
			<Route exact path='/profile' component={Profile} />
			<Route exact path='/read' component={ReadBlog} />
		</div>
	);
}

export default App;
