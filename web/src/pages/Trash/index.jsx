import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import Footer from '../../components/Footer/index';
import NavBar from '../../components/NavBar/index';

function Trash({ dataUser }) {
	return (
		<>
			<NavBar />
			<div className='titleArea'>
				<h3 className='titleTrash'>Estes são os livros que você excluiu</h3>
			</div>
			<div className='containerContent'>
				<div className='box-content'>
					{dataUser.books.length === 0 && (
						<div className='msgEmpty'>
							<h5>
								Lixeira vazia, Quando você excluir um livro, é pra cá
								que ele vem.
							</h5>
						</div>
					)}
					<div className='cardArea'>
						{dataUser.books.map(
							book => book.deleted && <Card key={book.id} book={book} />
						)}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

const mapStateToProps = state => ({
	dataUser: state.dataUser,
});

export default connect(mapStateToProps)(Trash);
