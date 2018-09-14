import { STORE_DECK, STORE_CARD, SET_CURRENT_DECK } from '../actions/types';

const INITIAL_STATE = {
	decks: {},
	currentDeck: ''
};

export default (state = INITIAL_STATE, action) => {
	const { payload } = action;
	switch (action.type) {
		case STORE_DECK:
			return {
				...state,
				decks: {
					...state.decks,
					[payload]: {
						title: payload,
						questions: []
					}
				}
			};
		case STORE_CARD:
			return {
				...state,
				decks: {
					...state.decks,
					[payload.deckID]: {
						...state.decks[payload.deckID],
						questions: [...state.decks[payload.deckID].questions, payload.card]
					}
				}
			};
		case SET_CURRENT_DECK:
			return {
				...state,
				currentDeck: payload
			};
		default:
			return state;
	}
};
