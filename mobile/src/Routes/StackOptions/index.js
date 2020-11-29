import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Options from '../../Pages/Private/Options';

function StackOptions() {
	const PrivateStack = createStackNavigator();
	return (
		<PrivateStack.Navigator>
			<PrivateStack.Screen name='Opções' component={Options} />
		</PrivateStack.Navigator>
	);
}

export default StackOptions;
