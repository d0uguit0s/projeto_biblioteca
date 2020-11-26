import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Card from '../../components/Card/index';
import Footer from '../../components/Footer';
import ModalAddBook from '../../components/ModalAddBook/index';
import NavBar from '../../components/NavBar';
import './style.css';

function Home({ dataUser }) {
	const history = useHistory();

	if (!dataUser) {
		history.push('/');
		return null;
	}
	return (
		<>
			<NavBar />
			<div className='titleArea'>
				<h1>{`Olá ${dataUser.name}!`}</h1>
			</div>
			<div className='containerContent'>
				<div className='box-content'>
					<ModalAddBook />
					<div className='cardArea'>
						{dataUser.books.map(({ title, synopsis }) => (
							<Card key={synopsis} title={title} text={synopsis} />
						))}
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
