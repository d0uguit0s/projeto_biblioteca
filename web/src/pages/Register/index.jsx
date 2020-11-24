import React, { useState } from 'react';
import ContainerForm from '../../components/ContainerForm';

// import { Container } from './styles';

function Register() {
	const [fieldName, setFieldName] = useState('');
	const [fieldLastName, setFieldLastName] = useState('');
	const [fieldEmail, setFieldEmail] = useState('');
	const [fieldPassword, setFieldPassword] = useState('');
	const [fieldConfirmPassword, setFieldConfirmPassword] = useState('');

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
							<span
								className='helper-text'
								data-error='wrong'
								data-success='right'
							>
								Helper text
							</span>
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
							<label htmlFor='email'>Email</label>
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
							/>
							<label htmlFor='password'>Senha</label>
						</div>
						<div className='input-field col s6'>
							<input
								id='confirmPassword'
								type='password'
								className='validate'
								value={fieldConfirmPassword}
								onChange={e => setFieldConfirmPassword(e.target.value)}
							/>
							<label htmlFor='confirmPassword'>Confirme a senha</label>
						</div>
					</div>
					<div className='areaBtn'>
						<button
							className='customBtn btn waves-effect waves-light'
							type='submit'
							name='action'
							// onClick={handleSubmit}
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
