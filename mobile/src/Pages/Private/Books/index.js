import React from 'react';

import { Text, View } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

import { styles } from './style';

function Books() {
	const list = [
		{
			title: 'Appointments',
			icon: 'av-timer',
		},
		{
			title: 'Trips',
			icon: 'flight-takeoff',
		},
	];
	return (
		<View>
			{list.map((item, i) => (
				<ListItem key={i} bottomDivider>
					<Icon name={item.icon} />
					<ListItem.Content>
						<ListItem.Title>{item.title}</ListItem.Title>
					</ListItem.Content>
					<ListItem.Chevron />
				</ListItem>
			))}
		</View>
	);
}

export default Books;
