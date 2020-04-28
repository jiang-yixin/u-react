import { combineReducers } from 'redux'

export const countReducer = (count = 0, action) => {
  if (action.type === 'increment') {
    return count + 1
  }
  else if (action.type === 'decrement') {
    return count - 1
  }
  else {
    return count
  }
}

/*
export const incrementReducer = (count = 0, action) => {
  if (action.type === 'increment') {
    return count + 1
  }
  else {
    return count
  }
}

export const decrementReducer = (count = 0, action) => {
  if (action.type === 'decrement') {
    return count - 1
  }
  else {
    return count
  }
}
*/

export default combineReducers({
  count: countReducer
})