import React, { useState } from 'react';
import ContainerForm from '../../components/ContainerForm';

// import { Container } from './styles';

function Register() {
	const [fieldName, setFieldName] = useState('');
	const [fieldLastName, setFieldLastName] = useState('');
	const [fieldEmail, setFieldEmail] = useState('');
	const [fieldPassword, setFieldPassword] = useState('');
	const [fieldConfirmPassword, setFieldConfirmPassword] = useState('');
	const [validationConfirmPsw, setValidationConfirmPsw] = useState('validate');

	function validatePsw() {
		if (fieldConfirmPassword === '') {
			setValidationConfirmPsw('validate');
		} else if (fieldPassword === fieldConfirmPassword) {
			setValidationConfirmPsw('validate, valid');
		} else {
			setValidationConfirmPsw('validate, invalid');
		}
	}

	function handleSubmit(e) {
		e.preventDefault();

		// axios.get('http://localhost:3333/users').then(response => {
		// 	const results = response.data;
		// 	if (fieldEmail === '' || fieldPassword === '') {
		// 		alert('Preencha os campos por favor!');
		// 	} else {
		// 		login = results.some(({ email, password }) => {
		// 			return email === fieldEmail && password === fieldPassword;
		// 		});
		// 	}

		// 	if (login) {
		// 		history.push('/loading');
		// 		setTimeout(() => {
		// 			history.push('/home');
		// 		}, 3000);
		// 	} else {
		// 		alert('Dados incorretos');
		// 	}
		// });
	}

	return (
		<ContainerForm>
			<div className='row'>
				<form className='col s12'>
					<div className='row'>
						<div className='input-field col s6'>
							<input
								id='first_name'
								type='text'
								className='validate'
								value={fieldName}
								onChange={e => setFieldName(e.target.value)}
							/>
							<label htmlFor='first_name'>Nome</label>
						</div>
						<div className='input-field col s6'>
							<input
								id='last_name'
								type='text'
								className='validate'
								value={fieldLastName}
								onChange={e => setFieldLastName(e.target.value)}
							/>
							<label htmlFor='last_name'>Sobrenome</label>
						</div>
					</div>

					<div className='row'>
						<div className='input-field col s12'>
							<input
								id='email'
								type='email'
								className='validate'
								value={fieldEmail}
								onChange={e => setFieldEmail(e.target.value)}
							/>
							<label htmlFor='email'>E-mail</label>
							<span
								className='helper-text'
								data-error='Insira um e-mail válido'
								data-success='E-mail ok'
							>
								Validação do email
							</span>
						</div>
					</div>

					<div className='row'>
						<div className='input-field col s6'>
							<input
								id='password'
								type='password'
								className='validate'
								value={fieldPassword}
								onChange={e => setFieldPassword(e.target.value)}
								onBlur={() => validatePsw()}
							/>
							<label htmlFor='password'>Senha</label>
						</div>
						<div className='input-field col s6'>
							<input
								id='confirmPassword'
								type='password'
								className={validationConfirmPsw}
								value={fieldConfirmPassword}
								onChange={e => setFieldConfirmPassword(e.target.value)}
								onKeyUp={() => validatePsw()}
							/>
							<label htmlFor='confirmPassword'>Confirme a senha</label>
							<span
								className='helper-text'
								data-error='As senhas não são iguais'
								data-success='As senhas estão corretas'
							>
								Validação da senha
							</span>
						</div>
					</div>
					<div className='areaBtn'>
						<button
							className='customBtn btn waves-effect waves-light'
							type='submit'
							name='action'
							onClick={handleSubmit}
						>
							Cadastrar-se
							<i className='material-icons right'>person_add</i>
						</button>
					</div>
				</form>
			</div>
		</ContainerForm>
	);
}

export default Register;
