import React from 'react';

import { FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

import { styles } from './style';

// import { styles } from './style';

function Trash({ dataUser }) {
	const renderDeletedBook = ({ item }) => {
		if (item.deleted)
			return (
				<View style={styles.container}>
					<ListItem bottomDivider containerStyle={styles.item}>
						<ListItem.Content>
							<ListItem.Title style={styles.bookTitle}>
								{item.title}
							</ListItem.Title>
							<ListItem.Subtitle style={styles.bookSubtitle}>
								{item.synopsis.length > 35
									? item.synopsis.slice(0, 35).concat('...')
									: item.synopsis}
							</ListItem.Subtitle>
						</ListItem.Content>
					</ListItem>
				</View>
			);

		return null;
	};

	return (
		<FlatList
			data={dataUser.books}
			renderItem={renderDeletedBook}
			keyExtractor={book => book.id.toString()}
			style={styles.lista}
		/>
	);
}

const mapStateToProps = state => ({
	dataUser: state.dataUser,
});

export default connect(mapStateToProps)(Trash);
