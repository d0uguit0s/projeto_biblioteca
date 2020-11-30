import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import ContainerForm from '../../components/ContainerForm/index';
import './style.css';
import { Creators as saveDataUserActions } from '../../store/ducks/dataUser';

function Login({ persistData }) {
	const [fieldEmail, setFieldEmail] = useState('douglas@mail.com');
	const [fieldPassword, setFieldPassword] = useState('123456');
	const history = useHistory();

	function handleSubmit(e) {
		e.preventDefault();

		axios
			.get(`http://192.168.0.106:3333/users`)
			.then(response => {
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
							history.push('/loading');
							setTimeout(() => {
								history.push('/home');
							}, 3000);
						}
					});
				}
			})
			.catch(error => {
				alert('Dados incorretos', error);
			});
	}

	return (
		<div className="bg">
			<ContainerForm>
				<form className='col s12 formArea'>
					<div className='inputArea'>
						<div className='row'>
							<div className='input-field col s12'>
								<i className='material-icons prefix'>account_circle</i>
								<input
									id='email'
									type='email'
									className='validate'
									value={fieldEmail}
									onChange={e => setFieldEmail(e.target.value)}
								/>
								<label htmlFor='email'>Email</label>
							</div>
						</div>
						<div className='row'>
							<div className='input-field col s12'>
								<i className='material-icons prefix'>vpn_key</i>
								<input
									id='password'
									type='password'
									className='validate'
									value={fieldPassword}
									onChange={e => setFieldPassword(e.target.value)}
								/>
								<label htmlFor='password'>Password</label>
							</div>
						</div>
					</div>
					<div className='areaBtn'>
						<button
							className='customBtn btn waves-effect waves-light'
							type='submit'
							name='action'
							onClick={handleSubmit}
						>
							Entrar
							<i className='material-icons right'>lock_open</i>
						</button>
					</div>
					<div className='links'>
						<Link to='/forgetPsw' className="linkStyle">Esqueci minha senha</Link>
						<Link to='/register' className="linkStyle">Cadastre-se</Link>
					</div>
				</form>
			</ContainerForm>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	persistData: dataUser =>
		dispatch(saveDataUserActions.successSignIn(dataUser)),
});

export default connect(null, mapDispatchToProps)(Login);
