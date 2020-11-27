export const Types = {
	SUCCESS_SIGN_IN: 'SUCCESS_SIGN_IN',
	ADD_BOOK: 'ADD_BOOK',
	DELETE_BOOK: 'DELETE_BOOK',
};

const INITIAL_STATE = {
	name: '',
	lastName: '',
	email: '',
	password: '',
	books: [],
	id: null,
};

export default function dataUserReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.SUCCESS_SIGN_IN:
			console.log(action.dataUser);
			return {
				...state,
				name: action.dataUser.name,
				lastName: action.dataUser.lastName,
				email: action.dataUser.email,
				password: action.dataUser.password,
				books: action.dataUser.books,
				id: action.dataUser.id,
			};
		case Types.ADD_BOOK:
			console.log('action book: ', action.book);
			return { ...state, books: [...state.books, action.book] };
		case Types.DELETE_BOOK:
			return {
				...state,
				books: state.books.map((book, i) =>
					i === action.book.id ? { ...book, deleted: true } : book
				),
			};
		default:
			return state;
	}
}

export const Creators = {
	successSignIn: dataUser => ({
		type: Types.SUCCESS_SIGN_IN,
		dataUser,
	}),
	addBook: book => ({
		type: Types.ADD_BOOK,
		book,
	}),
	deleteBook: book => ({
		type: Types.DELETE_BOOK,
		book,
	}),
};
