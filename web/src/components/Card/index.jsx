import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Creators as saveDataUserActions } from '../../store/ducks/dataUser';
import './style.css';

function Card({ book }) {
	const [check, setCheck] = useState(
		book.read ? 'btn_done_checked' : 'btn_done_unchecked'
	);

	function deleteB() {
		console.log('delete');
	}

	return (
		<div className='col s12 m6'>
			<div className='card blue-grey darken-1'>
				<div className='card-content white-text'>
					<span className='card-title'>{book.title}</span>
					<p>{book.text}</p>
				</div>
				<div className='card-action'>
					<a
						className='button'
						onClick={() => console.log('done')}
						onKeyPress={() => deleteB()}
					>
						<i className={`material-icons right ${check}`}>done</i>
					</a>
					<a
						className='button'
						onClick={() => console.log('delete')}
						onKeyPress={() => console.log('delete')}
					>
						<i className='material-icons right btn_delete'>delete</i>
					</a>
				</div>
			</div>
		</div>
	);
}

const mapDispacthToProps = dispatch => ({
	deleteBook: book => dispatch(saveDataUserActions.deleteBook(book)),
});

export default connect(mapDispacthToProps)(Card);
