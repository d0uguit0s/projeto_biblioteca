import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Pages/Authentication/Login';

function AuthRoutes() {
	const AuthStack = createStackNavigator();
	return (
		<AuthStack.Navigator>
			<AuthStack.Screen name='Login' component={Login} />
		</AuthStack.Navigator>
	);
}

export default AuthRoutes;
