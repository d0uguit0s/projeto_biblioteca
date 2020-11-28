import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Trash from '../../Pages/Private/Trash';

function StackTrash() {
	const PrivateStack = createStackNavigator();
	return (
		<PrivateStack.Navigator>
			<PrivateStack.Screen name='Trash' component={Trash} />
		</PrivateStack.Navigator>
	);
}

export default StackTrash;
