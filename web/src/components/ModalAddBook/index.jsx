import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './style.css';
import { Creators as saveDataUserActions } from '../../store/ducks/dataUser';

function ModalAddBook({ idUser, booksState, addBook }) {
	const [show, setShow] = useState('modal hide');
	const [fieldTitle, setFieldTitle] = useState('');
	const [fieldSynopsis, setFieldSynopsis] = useState('');

	// const history = useHistory();

	function handleSubmit(e) {
		e.preventDefault();

		if (fieldTitle && fieldSynopsis) {
			console.log('id: ', idUser);
			const book = {
				title: fieldTitle,
				synopsis: fieldSynopsis,
			};
			console.log('booksState: ', booksState);
			const newBooks = [...booksState, book];
			console.log('new: ', newBooks);
			addBook(book);

			axios
				.patch(`http://localhost:3333/users/${idUser}`, { books: newBooks })
				.then(() => {
					alert('Livro adicionado com sucesso!');
					// history.push('/loading');
					// setTimeout(() => {
					// 	history.push('/home');
					// }, 3000);
					setFieldTitle('');
					setFieldSynopsis('');
					setShow('modal hide');
				})
				.catch(error => alert(error));
		}
	}

	return (
		<>
			<a
				className='waves-effect waves-light btn-large'
				onClick={() => setShow('modal show')}
				onKeyPress={() => setShow('modal show')}
			>
				<i className='material-icons left'>library_add</i>adicionar um livro
			</a>

			<form className='col s12'>
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
								<label htmlFor='title'>Título</label>
							</div>
						</div>
						<div className='row'>
							<div className='input-field col s12'>
								<i className='material-icons prefix'>message</i>
								<textarea
									id='textarea1'
									className='materialize-textarea'
									value={fieldSynopsis}
									onChange={e => setFieldSynopsis(e.target.value)}
								/>
								<label htmlFor='textarea1'>Sinopse</label>
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
						<a
							className='modal-close waves-effect waves-green btn-flat'
							onClick={handleSubmit}
							onKeyPress={handleSubmit}
						>
							Adicionar
						</a>
					</div>
				</div>
			</form>
		</>
	);
}

const mapStateToProps = state => ({
	idUser: state.dataUser.id,
	booksState: state.dataUser.books,
});

const mapDispatchToProps = dispatch => ({
	addBook: book => dispatch(saveDataUserActions.addBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddBook);
