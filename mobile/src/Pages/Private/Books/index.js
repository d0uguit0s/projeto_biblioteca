import React from 'react';

import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

// import { styles } from './style';

function Books({ dataUser }) {
	const renderBook = ({ item }) => {
		if (!item.deleted)
			return (
				<ListItem key={item.id} bottomDivider>
					<ListItem.Content>
						<ListItem.Title>{item.title}</ListItem.Title>
					</ListItem.Content>
					<ListItem.Chevron />
				</ListItem>
			);

		return null;
	};

	return (
		<FlatList
			data={dataUser.books}
			renderItem={renderBook}
			keyExtractor={book => book.id.toString()}
		/>
	);
}

const mapStateToProps = state => ({
	dataUser: state.dataUser,
});

export default connect(mapStateToProps)(Books);
