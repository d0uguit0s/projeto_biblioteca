import React from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/index';
import Footer from '../../components/Footer';
import ModalAddBook from '../../components/ModalAddBook/index';
import NavBar from '../../components/NavBar';
import './style.css';

function Home({ dataUser }) {
	console.log('data home: ', dataUser);
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
						<Card
							title='A menina que roubava livros'
							text='Uma menina que rouba livros :v'
						/>
						<Card
							title='A menina que roubava livros'
							text='Uma menina que rouba livros :v'
						/>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

const mapStateToProps = state => ({
	dataUser: state.dataUser.state,
});

export default connect(mapStateToProps)(Home);
