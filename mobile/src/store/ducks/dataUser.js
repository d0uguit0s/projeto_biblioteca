export const Types = {
	SUCCESS_SIGN_IN: 'SUCCESS_SIGN_IN',
	SUCCESS_SIGN_OUT: 'SUCCESS_SIGN_OUT',
	ADD_BOOK: 'ADD_BOOK',
	DELETE_BOOK: 'DELETE_BOOK',
	CHANGE_STATUS_BOOK: 'CHANGE_STATUS_BOOK',
	UPDATE_BOOK: 'UPDATE_BOOK',
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
		case Types.SUCCESS_SIGN_OUT:
			console.log('saiu');
			return { INITIAL_STATE };
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
		case Types.CHANGE_STATUS_BOOK:
			return {
				...state,
				books: state.books.map((book, i) =>
					i === action.book.id ? { ...book, read: !book.read } : book
				),
			};
		case Types.UPDATE_BOOK:
			return {
				...state,
				books: state.books.map((book, i) =>
					i === action.book.id
						? {
								...book,
								title: action.book.title,
								synopsis: action.book.synopsis,
						  }
						: book
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
	successSignOut: () => ({
		type: Types.SUCCESS_SIGN_OUT,
	}),
	addBook: book => ({
		type: Types.ADD_BOOK,
		book,
	}),
	deleteBook: book => ({
		type: Types.DELETE_BOOK,
		book,
	}),
	changeStatusBook: book => ({
		type: Types.CHANGE_STATUS_BOOK,
		book,
	}),
	updateBook: book => ({
		type: Types.UPDATE_BOOK,
		book,
	}),
};
