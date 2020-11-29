import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Books from '../../Pages/Private/Books';
import DetailsBook from '../../Pages/Private/DetailsBook';

function StackBooks() {
	const PrivateStack = createStackNavigator();
	return (
		<PrivateStack.Navigator initialRouteName='Livros'>
			<PrivateStack.Screen name='Livros' component={Books} />
			<PrivateStack.Screen name='Detalhes' component={DetailsBook} />
		</PrivateStack.Navigator>
	);
}

export default StackBooks;
