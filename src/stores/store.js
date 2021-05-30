import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

const initialState = {
  users: [],
}

const middlewares = [thunkMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares)

const store = createStore(rootReducer, initialState, middlewareEnhancer)

export default store
