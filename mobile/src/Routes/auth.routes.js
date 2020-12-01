import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Pages/Auth/Login';

const bgStyles = {
	backgroundColor: '#FFF',
}

function AuthRoutes() {
	const AuthStack = createStackNavigator();
	return (
		<AuthStack.Navigator
			screenOptions={{
				headerStyle: bgStyles,
				headerTintColor: '#1fa566',
			}}
		>
			<AuthStack.Screen name='Login' component={Login} />
		</AuthStack.Navigator>
	);
}

export default AuthRoutes;
