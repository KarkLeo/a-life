const SET_CATEGORY = 'SET-CATEGORY'
const SET_ACTIVITY = 'SET-ACTIVITY'

const initialState = {
  activeCategory: null,
  activeActivity: null,
}

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY: {
      return {
        ...state,
        activeCategory: action.categoryId,
        activeActivity: null,
      }
    }
    case SET_ACTIVITY: {
      return {
        ...state,
        activeActivity: action.activityId,
      }
    }
    default:
      return state
  }
}

export const setCategory = (categoryId) => ({ type: SET_CATEGORY, categoryId })
export const setActivity = (activityId) => ({ type: SET_ACTIVITY, activityId })

export default activityReducer
