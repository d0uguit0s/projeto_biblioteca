import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-materialize';
import axios from 'axios';
import { Creators as saveDataUserActions } from '../../store/ducks/dataUser';
import 'materialize-css/dist/css/materialize.min.css';
import './style.css';

function ModalAddBook({ idUser, booksState, addBook }) {
	const [fieldTitle, setFieldTitle] = useState('');
	const [fieldSynopsis, setFieldSynopsis] = useState('');
	const [fieldRead, setFieldRead] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();

		if (fieldTitle && fieldSynopsis) {
			// console.log('id: ', idUser);
			const book = {
				title: fieldTitle,
				synopsis: fieldSynopsis,
				read: fieldRead,
				deleted: false,
				id: booksState.length,
			};
			console.log('booksState: ', booksState);
			const newBooks = [...booksState, book];
			// console.log('new: ', newBooks);
			addBook(book);

			axios
				.patch(`http://localhost:3333/users/${idUser}`, { books: newBooks })
				.then(() => {
					setFieldTitle('');
					setFieldSynopsis('');
				})
				.catch(error => alert(error));
		}
	}

	return (
		<Modal
			actions={[
				<Button flat modal='close' node='button' waves='red'>
					Cancelar
				</Button>,
				<Button
					flat
					modal='close'
					node='button'
					waves='green'
					onClick={handleSubmit}
				>
					Adicionar
				</Button>,
			]}
			bottomSheet={false}
			fixedFooter={false}
			header='Insira as informações do livro'
			id='Modal-0'
			open={false}
			options={{
				dismissible: false,
				endingTop: '10%',
				inDuration: 250,
				onCloseEnd: null,
				onCloseStart: null,
				onOpenEnd: null,
				onOpenStart: null,
				opacity: 0.5,
				outDuration: 250,
				preventScrolling: true,
				startingTop: '4%',
			}}
			//   root={[object HTMLBodyElement]}
			trigger={
				<Button large node='button'>
					<i className='material-icons left'>library_add</i>Adicionar um
					livro
				</Button>
			}
		>
			<form className='col s12'>
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

				<p>
					<label>
						<input
							name='read'
							type='radio'
							onChange={() => setFieldRead(true)}
						/>
						<span>Já li</span>
					</label>
				</p>
				<p>
					<label>
						<input
							name='read'
							type='radio'
							onChange={() => setFieldRead(false)}
							checked
						/>
						<span>Ainda vou ler</span>
					</label>
				</p>
			</form>
		</Modal>
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
