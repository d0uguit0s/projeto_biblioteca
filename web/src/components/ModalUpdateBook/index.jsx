import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './style.css';
import { Creators as saveDataUserActions } from '../../store/ducks/dataUser';

function ModalUpdateBook({ idUser, booksState, addBook }) {
	const [show, setShow] = useState('modal hide');
	const [fieldTitle, setFieldTitle] = useState('');
	const [fieldSynopsis, setFieldSynopsis] = useState('');
	const [fieldRead, setFieldRead] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();

		// if (fieldTitle && fieldSynopsis) {
		// 	// console.log('id: ', idUser);
		// 	const book = {
		// 		title: fieldTitle,
		// 		synopsis: fieldSynopsis,
		// 		read: fieldRead,
		// 		deleted: false,
		// 		id: booksState.length,
		// 	};
		// 	console.log('booksState: ', booksState);
		// 	const newBooks = [...booksState, book];
		// 	// console.log('new: ', newBooks);
		// 	addBook(book);

		// 	axios
		// 		.patch(`http://localhost:3333/users/${idUser}`, { books: newBooks })
		// 		.then(() => {
		// 			setFieldTitle('');
		// 			setFieldSynopsis('');
		// 			setShow('modal hide');
		// 		})
		// 		.catch(error => alert(error));
		// }
		console.log('submit update');
	}

	return (
		<>
			<a
				className='button'
				onClick={() => setShow('modal show')}
				onKeyPress={() => setShow('modal show')}
			>
				<i className='material-icons btn_edit'>create</i>
			</a>

			<form className='col s12'>
				<div id='modal2' className={show}>
					<div className='modal-content'>
						<h4>Insira as informações do livro</h4>
						<div className='row'>
							<div className='input-field col s12'>
								<i className='material-icons prefix'>book</i>
								<input
									id='title2'
									type='text'
									className='validate'
									value={fieldTitle}
									onChange={e => setFieldTitle(e.target.value)}
								/>
								<label htmlFor='title2'>Título</label>
							</div>
						</div>
						<div className='row'>
							<div className='input-field col s12'>
								<i className='material-icons prefix'>message</i>
								<textarea
									id='textarea2'
									className='materialize-textarea'
									value={fieldSynopsis}
									onChange={e => setFieldSynopsis(e.target.value)}
								/>
								<label htmlFor='textarea2'>Sinopse</label>
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
							Salvar
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUpdateBook);
