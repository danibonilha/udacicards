import { STORE_DECK, STORE_QUESTION } from '../actions/types';

const INITIAL_STATE = {
	decks: {}
};

export default (state = INITIAL_STATE, action) => {
	const { payload } = action;
	switch (action.type) {
		case STORE_DECK:
			return { ...state, decks: payload };
		case STORE_QUESTION:
			return { ...state, decks: payload };
		default:
			return state;
	}
};