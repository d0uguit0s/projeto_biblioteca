import React from 'react';

import { View } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import { Creators as saveDataUserActions } from '../../../store/ducks/dataUser';

// import { styles } from './style';

function Options({ successSignOut }) {
	const list = [
		{
			title: 'Sair',
			icon: {
				name: 'logout',
				type: 'material-community',
				color: '#000',
			},
			id: 1,
		},
	];
	return (
		<View>
			{list.map(item => (
				<ListItem key={item.id} bottomDivider onPress={successSignOut}>
					<Icon
						name={item.icon.name}
						type={item.icon.type}
						color={item.icon.color}
					/>
					<ListItem.Content>
						<ListItem.Title>{item.title}</ListItem.Title>
					</ListItem.Content>
				</ListItem>
			))}
		</View>
	);
}

const mapDispacthToProps = dispatch => ({
	successSignOut: () => dispatch(saveDataUserActions.successSignOut()),
});

export default connect(null, mapDispacthToProps)(Options);
