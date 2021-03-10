import React from 'react';
import { Switch } from 'react-router-dom'

import Route from './Route';

import Home from '../pages/public/Home';
import SignIn from '../pages/public/SignIn';
import SignUp from '../pages/public/SignUp';

import Dashboard from '../pages/private/Dashboard';

const Routes: React.FC = () => (
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/signin' component={SignIn} />
		<Route path='/signup' component={SignUp} />

		<Route path='/dashboard' component={Dashboard} isPrivate />
	</Switch>
);

export default Routes;