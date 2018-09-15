import { STORE_DECK, STORE_CARD, SET_CURRENT_DECK, DELETE_DECK } from '../actions/types';

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
				},
				currentDeck: payload
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
		case DELETE_DECK: {
			/* With destructing it separates the posts that should be deleted
			 * and using the rest pattern is possible to assign the
			 * rest of the object to updatedDecks variable
			 */
			const { [payload]: deletedDeck, ...updatedDecks } = state.decks;
			return {
				...state, decks: updatedDecks, currentDeck: ''
			};
		}
		default:
			return state;
	}
};
