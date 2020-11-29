import { createStore, applyMiddleware } from "redux";
import rootReducers from "./root-reducer";
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';


const middleWares = [logger];

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middleWares)));

export const persistor = persistStore(store)

export default { store, persistor };