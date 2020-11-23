import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';
import Home from './pages/Home';
import Login from './pages/Login/index';
import User from './pages/User/index';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/loading' component={Loading} />
				<Route path='/' component={Login} exact />
				<Route path='/users' component={User} />
				<Route path='/home' component={Home} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
