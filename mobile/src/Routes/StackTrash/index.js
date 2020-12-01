import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Trash from '../../Pages/Private/Trash';

const bgStyles = {
	backgroundColor: '#1fa566',
}

function StackTrash() {
	const PrivateStack = createStackNavigator();
	return (
		<PrivateStack.Navigator
			screenOptions={{
				headerStyle: bgStyles,
				headerTintColor: '#FFF',
			}}
		>
			<PrivateStack.Screen name='Lixeira' component={Trash} />
		</PrivateStack.Navigator>
	);
}

export default StackTrash;
