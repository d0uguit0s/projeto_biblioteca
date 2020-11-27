import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Creators as saveDataUserActions } from '../../store/ducks/dataUser';
import ModalUpdateBook from '../ModalUpdateBook';
import './style.css';

function Card({ book, deleteBook, changeStatusBook, idUser, booksState }) {
	const [check, setCheck] = useState(book.read);

	function deleteB() {
		deleteBook(book);

		const newBooks = booksState.map((b, i) =>
			i === book.id ? { ...b, deleted: true } : b
		);

		axios
			.patch(`http://localhost:3333/users/${idUser}`, { books: newBooks })
			.then(() => {})
			.catch(error => alert(error));
	}

	function changeStatusB() {
		console.log('change');
		changeStatusBook(book);
		setCheck(!check);

		const newBooks = booksState.map((b, i) =>
			i === book.id ? { ...b, read: !b.read } : b
		);

		axios
			.patch(`http://localhost:3333/users/${idUser}`, { books: newBooks })
			.then(() => {})
			.catch(error => alert(error));
	}

	return (
		<div className='col s12 m6'>
			<div className='card blue-grey darken-1'>
				<div className='card-content white-text'>
					<span className='card-title'>{book.title}</span>
					<p>{book.synopsis}</p>
				</div>
				{!book.deleted && (
					<div className='card-action fotter-card'>
						<a
							className='button'
							onClick={() => changeStatusB()}
							onKeyPress={() => changeStatusB()}
						>
							<i
								className={`material-icons ${
									check ? 'btn_done_checked' : 'btn_done_unchecked'
								}`}
							>
								done
							</i>
						</a>
						<ModalUpdateBook book={book} />
						<a
							className='button'
							onClick={() => deleteB()}
							onKeyPress={() => deleteB()}
						>
							<i className='material-icons btn_delete'>delete</i>
						</a>
					</div>
				)}
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	idUser: state.dataUser.id,
	booksState: state.dataUser.books,
});

const mapDispacthToProps = dispatch => ({
	deleteBook: book => dispatch(saveDataUserActions.deleteBook(book)),
	changeStatusBook: book =>
		dispatch(saveDataUserActions.changeStatusBook(book)),
});

export default connect(mapStateToProps, mapDispacthToProps)(Card);
