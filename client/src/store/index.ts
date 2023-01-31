import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
import { userReducer } from "./reducers/registerReducer";



const rootReducer = combineReducers({
	user:userReducer
})

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)) )