import { combineReducers, createStore } from 'redux'
import responsive from './responsiveReducer'
import activity from './activityReducer'

let reducer = combineReducers({
  responsive,
  activity,
})

export default (preloadedState) => {
  return createStore(reducer, preloadedState)
}
