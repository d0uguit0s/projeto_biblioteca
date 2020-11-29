import React from 'react';

import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

// import { styles } from './style';

function Trash({ dataUser }) {
	const renderDeletedBook = ({ item }) => {
		if (item.deleted)
			return (
				<ListItem bottomDivider onPress={() => console.log('cliclou')}>
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
			);

		return null;
	};

	return (
		<FlatList
			data={dataUser.books}
			renderItem={renderDeletedBook}
			keyExtractor={book => book.id.toString()}
		/>
	);
}

const mapStateToProps = state => ({
	dataUser: state.dataUser,
});

export default connect(mapStateToProps)(Trash);
