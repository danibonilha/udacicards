import { STORE_DECK, STORE_CARD, SET_CURRENT_DECK } from './types';

const storeDeck = deckID => ({
	type: STORE_DECK,
	payload: deckID
});

const storeCard = card => ({
	type: STORE_CARD,
	payload: { ...card }
});


export const createDeck = deckID => dispatch => dispatch(storeDeck(deckID));

export const createCard = card => dispatch => dispatch(storeCard(card));

export const setCurrentDeck = deckID => dispatch =>
	dispatch({
		type: SET_CURRENT_DECK,
		payload: deckID
	});
