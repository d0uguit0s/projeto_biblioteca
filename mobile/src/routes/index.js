import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthRoutes from './auth.routes';

// import { connect } from 'react-redux';

// import AuthRoutes from './auth.routes';

const Stack = createStackNavigator();

export const Routes = ({ user, typeUser }) => {
  return <AuthRoutes />
	// return !user ? (
	// 	<AuthRoutes />
	// ) : typeUser === 'paciente' ? (
	// 	<DrawerNavigatorPaciente />
	// ) : (
	// 	<DrawerNavigatorPsicologo />
	// );
};

// const mapStateToProps = state => ({
// 	user: state.authSignIn.user,
// 	typeUser: state.authSignIn.typeUser,
// 	loading: state.authSignIn.loading,
// });

// export default connect(mapStateToProps)(Routes);
