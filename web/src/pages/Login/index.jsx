import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import ContainerForm from '../../components/ContainerForm/index';
import './style.css';

function Login() {
	const [fieldEmail, setFieldEmail] = useState('');
	const [fieldPassword, setFieldPassword] = useState('');
	const history = useHistory();
	let login;

	function handleSubmit(e) {
		e.preventDefault();

		axios.get('http://localhost:3333/users').then(response => {
			const results = response.data;
			if (fieldEmail === '' || fieldPassword === '') {
				alert('Preencha os campos por favor!');
			} else {
				login = results.some(({ email, password }) => {
					return email === fieldEmail && password === fieldPassword;
				});
			}

			if (login) {
				history.push('/loading');
				setTimeout(() => {
					history.push('/home');
				}, 3000);
			} else {
				alert('Dados incorretos');
			}
		});
	}

	return (
		<ContainerForm>
			<form className='col s12'>
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
					<Link to='/forgetPsw'>Esqueci minha senha</Link>
					<Link to='/register'>Cadastre-se</Link>
				</div>
			</form>
		</ContainerForm>
	);
}

export default Login;
