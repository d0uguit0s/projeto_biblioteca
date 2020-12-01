import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-materialize';
import axios from 'axios';
import { Creators as saveDataUserActions } from '../../store/ducks/dataUser';
import 'materialize-css/dist/css/materialize.min.css';
import './style.css';

function ModalUpdateBook({ book, booksState, idUser, updateBook }) {
	const [fieldTitle, setFieldTitle] = useState(book.title);
	const [fieldSynopsis, setFieldSynopsis] = useState(book.synopsis);

	function handleSubmit(e) {
		e.preventDefault();

		if (fieldTitle && fieldSynopsis) {
			const Newbook = {
				...book,
				title: fieldTitle,
				synopsis: fieldSynopsis,
			};
			updateBook(Newbook);

			const newBooks = booksState.map((b, i) =>
				i === book.id
					? { ...b, title: Newbook.title, synopsis: Newbook.synopsis }
					: b
			);

			axios
				.patch(`http://192.168.2.4:3333/users/${idUser}`, {
					books: newBooks,
				})
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
					Salvar
				</Button>,
			]}
			bottomSheet={false}
			fixedFooter={false}
			header='Modifique as informações do livro'
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
				<a className='button'>
					<i className='material-icons btn_edit'>create</i>
				</a>
			}
			className='modalStyle'
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
			</form>
		</Modal>
	);
}

const mapStateToProps = state => ({
	idUser: state.dataUser.id,
	booksState: state.dataUser.books,
});

const mapDispatchToProps = dispatch => ({
	updateBook: book => dispatch(saveDataUserActions.updateBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalUpdateBook);
