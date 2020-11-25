export const Types = {
	SUCCESS_SIGN_IN: 'SUCCESS_SIGN_IN',
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
			return { state: action.dataUser };
		default:
			return state;
	}
}

export const Creators = {
	successSignIn: dataUser => ({
		type: Types.SUCCESS_SIGN_IN,
		dataUser,
	}),
};
