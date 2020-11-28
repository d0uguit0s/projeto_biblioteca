import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Books from '../../Pages/Private/Books';

function StackBooks() {
	const PrivateStack = createStackNavigator();
	return (
		<PrivateStack.Navigator>
			<PrivateStack.Screen name='Books' component={Books} />
		</PrivateStack.Navigator>
	);
}

export default StackBooks;
