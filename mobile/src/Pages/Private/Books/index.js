import React, { useState } from 'react';

import { FlatList, View } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import { styles } from './style';

function Books({ dataUser, navigation }) {
	const renderBook = ({ item }) => {
		if (item.deleted)
			return (
				<View style={styles.container}>
					<ListItem
						bottomDivider
						onPress={() => navigation.navigate('Detalhes', { book: item })}
						containerStyle={styles.item}
					>
						<Icon
							name='check'
							type='feather'
							color={item.read ? '#adff2f' : '#808080'}
						/>
						<ListItem.Content>
							<ListItem.Title>{item.title}</ListItem.Title>
							<ListItem.Subtitle>
								{item.synopsis.length > 35
									? item.synopsis.slice(0, 35).concat('...')
									: item.synopsis}
							</ListItem.Subtitle>
						</ListItem.Content>
						<ListItem.Chevron />
					</ListItem>
				</View>
			);

		return null;
	};

	return (
		<FlatList
			data={dataUser.books}
			renderItem={renderBook}
			keyExtractor={book => book.id.toString()}
			style={styles.lista}
		/>
	);
}

const mapStateToProps = state => ({
	dataUser: state.dataUser,
});

export default connect(mapStateToProps)(Books);
