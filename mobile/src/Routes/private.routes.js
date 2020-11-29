import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackBooks from './StackBooks';
import StackOptions from './StackOptions';
import StackTrash from './StackTrash';

function PrivateRoutes() {
	const PrivateTab = createBottomTabNavigator();
	return (
		<PrivateTab.Navigator
			// screenOptions={({ route }) => ({
			// 	// tabBarIcon: ({ focused, color, size }) => {
			// 	// 	let iconName;
			// 	// 	if (route.name === 'Home') {
			// 	// 		iconName = focusedc
			// 	// 			? 'ios-information-circle'
			// 	// 			: 'ios-information-circle-outline';
			// 	// 	} else if (route.name === 'Settings') {
			// 	// 		iconName = focused ? 'ios-list-box' : 'ios-list';
			// 	// 	}
			// 	// 	// You can return any component that you like here!
			// 	// 	return <Ionicons name={iconName} size={size} color={color} />;
			// 	// },
			// })}
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray',
			}}
		>
			<PrivateTab.Screen name='Books' component={StackBooks} />
			<PrivateTab.Screen name='Trash' component={StackTrash} />
			<PrivateTab.Screen name='Options' component={StackOptions} />
		</PrivateTab.Navigator>
	);
}

export default PrivateRoutes;
