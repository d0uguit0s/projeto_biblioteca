import React from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

function Trash({ dataUser }) {
	return (
		<>
			<NavBar />
			<div className='titleArea'>
				<h1>{`Olá ${dataUser.name}!`}</h1>
			</div>
			<div className='containerContent'>
				<div className='box-content'>
					{dataUser.books.length === 0 && (
						<div className='msgEmpty'>
							<h5>
								Biblioteca vazia, clique no botão acima para começar a
								criar sua bibilioteca pessoal!
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
