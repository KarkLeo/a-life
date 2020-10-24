const SET_SIZE = 'SET-SIZE'

const initialState = {
  size: null,
}

const responsiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIZE: {
      return {
        ...state,
        size: action.size,
      }
    }
    default:
      return state
  }
}

export const setSize = (size) => ({ type: SET_SIZE, size })

export default responsiveReducer
