import React from 'react';

import { ScrollView, View } from 'react-native';
import { Card } from 'react-native-elements';

import LineDetailsBooks from '../../../Components/LineDetailsBook';
import { styles } from './style';

function DetailsBook({ route }) {
	const { book } = route.params;
	return (
		<ScrollView style={styles.container}>
			<Card style={styles.card}>
				<Card.Title style={styles.title}>
					{book.title.toUpperCase()}
				</Card.Title>
				<Card.Divider />
				<View>
					<LineDetailsBooks label='Sinopse' txt={book.synopsis} />
					<LineDetailsBooks
						label='Status'
						txt={book.read ? 'Lido' : 'Lendo'}
					/>
				</View>
			</Card>
		</ScrollView>
	);
}

export default DetailsBook;
