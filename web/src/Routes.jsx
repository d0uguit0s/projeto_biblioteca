import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';
import ForgetPsw from './pages/ForgetPsw';
import Home from './pages/Home';
import Login from './pages/Login/index';
import Register from './pages/Register';
import User from './pages/User/index';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' component={Login} exact />
				<Route path='/register' component={Register} exact />
				<Route path='/forgetPsw' component={ForgetPsw} exact />
				<Route path='/home' component={Home} />
				<Route path='/users' component={User} />
				<Route path='/loading' component={Loading} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
