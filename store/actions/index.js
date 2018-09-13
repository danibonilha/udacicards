import { STORE_DECK, STORE_CARD, SET_CURRENT_DECK } from './types';

export const createDeck = deckID => dispatch =>
	dispatch({
		type: STORE_DECK,
		payload: deckID
	});

export const createCard = card => dispatch =>
	dispatch({
		type: STORE_CARD,
		payload: { ...card }
	});

export const setCurrentDeck = deckID => dispatch =>
	dispatch({
		type: SET_CURRENT_DECK,
		payload: deckID
	});
