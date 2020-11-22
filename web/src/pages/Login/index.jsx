import React, { useState } from 'react';
import ContainerForm from '../../components/ContainerForm/index';
import './style.css';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleSubmit(e) {
		e.preventDefault();

		// if (email === '' || password === '') {
		// 	alert('Preencha os campos');
		// }
	}

	return (
		<ContainerForm>
			<form className='col s12'>
				<div className='row'>
					<div className='input-field col s12'>
						<i className='material-icons prefix'>account_circle</i>
						<input
							id='email'
							type='email'
							className='validate'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
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
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<label htmlFor='password'>Password</label>
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
					<a href='#'>Esqueci minha senha</a>
					<a href='#'>Cadastre-se</a>
				</div>
			</form>
		</ContainerForm>
	);
}

export default Login;
