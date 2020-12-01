import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import ContainerForm from '../../components/ContainerForm';

// import { Container } from './styles';

function Register() {
	const [fieldName, setFieldName] = useState('');
	const [fieldLastName, setFieldLastName] = useState('');
	const [fieldEmail, setFieldEmail] = useState('');
	const [fieldPassword, setFieldPassword] = useState('');
	const [fieldConfirmPassword, setFieldConfirmPassword] = useState('');

	const [errorField, setErrorField] = useState(true);
	const [validationName, setValidationName] = useState('validate');
	const [validationLastName, setValidationLastName] = useState('validate');
	const [validationConfirmPsw, setValidationConfirmPsw] = useState('validate');

	const history = useHistory();

	const data = {
		name: fieldName,
		lastName: fieldLastName,
		email: fieldEmail,
		password: fieldPassword,
	};

	function validateName() {
		if (fieldName === '') {
			setValidationName('validate, invalid');
			setErrorField(true);
		} else {
			setValidationName('validate, valid');
			setErrorField(false);
		}
	}

	function validateLastName() {
		if (fieldLastName === '') {
			setValidationLastName('validate, invalid');
			setErrorField(true);
		} else {
			setValidationLastName('validate, valid');
			setErrorField(false);
		}
	}

	function validatePsw() {
		if (fieldConfirmPassword === '') {
			setValidationConfirmPsw('validate');
			setErrorField(false);
		} else if (fieldPassword === fieldConfirmPassword) {
			setValidationConfirmPsw('validate, valid');
			setErrorField(false);
		} else {
			setValidationConfirmPsw('validate, invalid');
			setErrorField(true);
		}
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (!errorField) {
			axios
				.post('http://192.168.2.4:3333/users', data)
				.then(() => {
					alert('Usuário criado com sucesso!');
					history.push('/loading');
					setTimeout(() => {
						history.push('/home');
					}, 3000);
				})
				.catch(error => alert(error));
		}
	}

	return (
		<div className='bg'>
			<ContainerForm>
				<div className='row'>
					<form className='col s12'>
						<div className='row'>
							<div className='input-field col s6'>
								<input
									id='first_name'
									type='text'
									className={validationName}
									value={fieldName}
									onChange={e => setFieldName(e.target.value)}
									onBlur={() => validateName()}
									onKeyUp={() => validateName()}
								/>
								<label htmlFor='first_name'>Nome</label>
								<span
									className='helper-text'
									data-error='O nome é obrigatório'
								/>
							</div>
							<div className='input-field col s6'>
								<input
									id='last_name'
									type='text'
									className={validationLastName}
									value={fieldLastName}
									onChange={e => setFieldLastName(e.target.value)}
									onBlur={() => validateLastName()}
									onKeyUp={() => validateLastName()}
								/>
								<label htmlFor='last_name'>Sobrenome</label>
								<span
									className='helper-text'
									data-error='O sobrenome é obrigatório'
								/>
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
									onChange={e =>
										setFieldConfirmPassword(e.target.value)
									}
									onKeyUp={() => validatePsw()}
								/>
								<label htmlFor='confirmPassword'>
									Confirme a senha
								</label>
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
		</div>
	);
}

export default Register;
