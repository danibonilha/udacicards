import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { reducer } from './reducer';

const persistConfig = {
	key: 'root',
	storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
	persistedReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);

export { store, persistor };
