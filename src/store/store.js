import { combineReducers, createStore } from 'redux'
import responsive from './responsiveReducer'

let reducer = combineReducers({
  responsive,
})

export default (preloadedState) => {
  return createStore(reducer, preloadedState)
}
