import React from 'react';

import { Text, View } from 'react-native';

import { styles } from './style';

function LineDetailsBooks({ label, txt }) {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{`${label}: `}</Text>
			<Text style={styles.txt}>{txt}</Text>
		</View>
	);
}

export default LineDetailsBooks;
