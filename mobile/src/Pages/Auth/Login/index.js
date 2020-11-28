import React, { useState } from 'react';

import axios from 'axios';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import { Creators as saveDataUserActions } from '../../../store/ducks/dataUser';
import { styles } from './style';

function Login({ persistData }) {
	const [fieldEmail, setFieldEmail] = useState('douglas@mail.com');
	const [fieldPassword, setFieldPassword] = useState('123456');
	const [loading, setLoading] = useState(false);

	function handleSubmit() {
		setLoading(true);

		axios
			.get('http://10.0.2.2:3333/users') // Funciona apenas no emulador
			// .get('http://192.168.2.5:3333/users')
			.then(response => {
				console.log('foi');
				setLoading(false);

				const results = response.data;
				if (fieldEmail === '' || fieldPassword === '') {
					alert('Preencha os campos por favor!');
				} else {
					results.forEach(result => {
						if (
							result.email === fieldEmail &&
							result.password === fieldPassword
						) {
							persistData(result);
						}
					});
				}
			})
			.catch(error => {
				setLoading(false);
				alert('Dados incorretos', error);
			});
	}

	return (
		<View style={styles.container}>
			<Input
				label='E-mail'
				placeholder='email@exemplo.com'
				leftIcon={<Icon name='envelope-o' size={24} color='black' />}
				leftIconContainerStyle={styles.iconInput}
				// errorStyle={{ color: 'red' }}
				// errorMessage='ENTER A VALID ERROR HERE'
				value={fieldEmail}
				onChangeText={value => setFieldEmail(value)}
			/>

			<Input
				secureTextEntry
				label='Senha'
				placeholder='senhaExemplo@123'
				leftIcon={<Icon name='lock' size={24} color='black' />}
				leftIconContainerStyle={styles.iconInput}
				// errorStyle={{ color: 'red' }}
				// errorMessage='ENTER A VALID ERROR HERE'
				value={fieldPassword}
				onChangeText={value => setFieldPassword(value)}
			/>

			<Button
				icon={<Icon name='long-arrow-right' size={20} color='white' />}
				iconRight
				title='Entrar'
				titleStyle={styles.titleBtn}
				buttonStyle={styles.btn}
				loading={loading}
				onPress={handleSubmit}
			/>
		</View>
	);
}

const mapDispatchToProps = dispatch => ({
	persistData: dataUser =>
		dispatch(saveDataUserActions.successSignIn(dataUser)),
});

export default connect(null, mapDispatchToProps)(Login);
