import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Options from '../../Pages/Private/Options';

const bgStyles = {
	backgroundColor: '#1fa566',
}

function StackOptions() {
	const PrivateStack = createStackNavigator();
	return (
		<PrivateStack.Navigator
			screenOptions={{
				headerStyle: bgStyles,
				headerTintColor: '#FFF',
			}}
		>
			<PrivateStack.Screen name='Opções' component={Options} />
		</PrivateStack.Navigator>
	);
}

export default StackOptions;
