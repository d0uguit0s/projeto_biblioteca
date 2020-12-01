import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import StackBooks from './StackBooks';
import StackOptions from './StackOptions';
import StackTrash from './StackTrash';

const teste = {
	backgroundColor:  '#98fb9880',
}

function PrivateRoutes() {
	const PrivateTab = createBottomTabNavigator();
	return (
		<PrivateTab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size }) => {
					let iconName;
					let iconType;

					switch (route.name) {
						case 'Livros':
							iconType = 'antdesign';
							iconName = 'book';
							break;
						case 'Lixeira':
							iconType = 'feather';
							iconName = 'trash';
							break;
						case 'Opções':
							iconType = 'feather';
							iconName = 'sliders';
							break;
						default:
							iconType = 'feather';
							iconName = 'circle';
							break;
					}

					return <Icon name={iconName} type={iconType} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: '#1fa566',
				activeBackgroundColor: '#98fb9880',
			}}
		>
			<PrivateTab.Screen name='Livros' component={StackBooks} />
			<PrivateTab.Screen name='Lixeira' component={StackTrash} />
			<PrivateTab.Screen name='Opções' component={StackOptions} />
		</PrivateTab.Navigator>
	);
}

export default PrivateRoutes;
