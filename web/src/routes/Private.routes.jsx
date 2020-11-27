import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ id, component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			id ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: '/', state: { from: props.location } }} />
			)
		}
	/>
);

const mapStateToProps = state => ({
	id: state.dataUser.id,
});

export default connect(mapStateToProps)(PrivateRoute);
