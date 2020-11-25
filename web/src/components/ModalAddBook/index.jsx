import React, { useState } from 'react';
import './style.css';

// import { Container } from './styles';

function ModalAddBook() {
	const [show, setShow] = useState('modal hide');
	const [fieldTitle, setFieldTitle] = useState('');
	console.log(show);

	return (
		<>
			<a
				className='waves-effect waves-light btn-large'
				onClick={() => setShow('modal show')}
				onKeyPress={() => setShow('modal show')}
			>
				<i className='material-icons left'>library_add</i>adicionar um livro
			</a>

			<div id='modal1' className={show}>
				<div className='modal-content'>
					<h4>Insira as informações do livro</h4>
					<div className='row'>
						<div className='input-field col s12'>
							<i className='material-icons prefix'>book</i>
							<input
								id='title'
								type='text'
								className='validate'
								value={fieldTitle}
								onChange={e => setFieldTitle(e.target.value)}
							/>
							<label htmlFor='title'>Title</label>
						</div>
					</div>
					<div className='row'>
						<div className='input-field col s12'>
							<i className='material-icons prefix'>message</i>
							<textarea
								id='textarea1'
								className='materialize-textarea'
							/>
							<label htmlFor='textarea1'>Textarea</label>
						</div>
					</div>
				</div>
				<div className='modal-footer'>
					<a
						className='modal-close waves-effect waves-green btn-flat'
						onClick={() => setShow('modal hide')}
						onKeyPress={() => setShow('modal hide')}
					>
						Cancelar
					</a>
					<a className='modal-close waves-effect waves-green btn-flat'>
						Adicionar
					</a>
				</div>
			</div>
		</>
	);
}

export default ModalAddBook;
