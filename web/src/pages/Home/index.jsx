import React from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/index';
import Footer from '../../components/Footer/index';
import ModalAddBook from '../../components/ModalAddBook/index';
import NavBar from '../../components/NavBar/index';
import './style.css';

function Home({ dataUser }) {
	return (
		<>
			<NavBar />
			<div className='titleArea'>
				<h1 className='msg-user'>{`Olá, ${dataUser.name}!`}</h1>
				<h8 className='msg-user'>Seja bem-vindo à sua biblioteca pessoal.</h8>
			</div>
			<div className='containerContent'>
				<div className='box-content'>
					<ModalAddBook />
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
							book => !book.deleted && <Card key={book.id} book={book} />
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

export default connect(mapStateToProps)(Home);
