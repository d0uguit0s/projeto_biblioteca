import React from 'react';

import { connect } from 'react-redux';

import AuthRoutes from './auth.routes';
import PrivateRoutes from './private.routes';

function Routes({ id }) {
	return !id ? <AuthRoutes /> : <PrivateRoutes />;
}

const mapStateToProps = state => ({
	id: state.dataUser.id,
});

export default connect(mapStateToProps)(Routes);
