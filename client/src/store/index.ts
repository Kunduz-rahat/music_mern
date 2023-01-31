import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
import { registerReducer} from "./reducers/registerReducer";



const rootReducer = combineReducers({
	register:registerReducer
})

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)) )