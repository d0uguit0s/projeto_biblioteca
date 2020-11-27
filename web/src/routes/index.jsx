import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ForgetPsw from '../pages/ForgetPsw';
import Home from '../pages/Home';
import Login from '../pages/Login/index';
import Register from '../pages/Register';
import User from '../pages/User/index';
import PrivateRoutes from './Private.routes';
import Trash from '../pages/Trash';
import Loading from '../components/Loading';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' component={Login} exact />
				<Route path='/register' component={Register} />
				<Route path='/forgetPsw' component={ForgetPsw} />
				<PrivateRoutes path='/home' component={Home} />
				<PrivateRoutes path='/trash' component={Trash} />
				<Route path='/loading' component={Loading} />
			</Switch>
		</BrowserRouter>
	);
}

const mapStateToProps = state => ({
	dataUser: state.dataUser,
});

export default connect(mapStateToProps)(Routes);
