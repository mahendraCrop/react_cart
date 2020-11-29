import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from './cart/cart.reducer.js'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import directoryReducers from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"]
}

const rootReducer = combineReducers(
    {
        user: userReducer,
        cart: cartReducer,
        directory: directoryReducers,
        shop: shopReducer
    }
)
export default persistReducer(persistConfig, rootReducer)
