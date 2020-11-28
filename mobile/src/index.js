import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import React from 'react';
import Routes from './Routes';
import store from './store';

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Routes />
			</NavigationContainer>
		</Provider>
	);
}
