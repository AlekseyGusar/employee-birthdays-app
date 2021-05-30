import { combineReducers } from 'redux'
import { saveItem } from '../services/localStorageService'
import { USERS, NOTACTIVE } from '../constants/constans'
import { getMonthIndex, getIndexMonthStartingFromCurent } from '../utils/utils'

const populateUsers = (users) => {
  let populatedUsers
  if (users[0] && users[0].active) {
    populatedUsers = users
  } else {
    populatedUsers = users.map((user) => {
      const monthIndex = getMonthIndex(user.dob)
      const populatedUser = {
        ...user,
        active: NOTACTIVE,
        letter: user.lastName && user.lastName[0],
        month: monthIndex,
        indexFromCurentMonth: getIndexMonthStartingFromCurent(monthIndex),
      }
      return populatedUser
    })
  }
  populatedUsers.sort(function (a, b) {
    const keyA = a.lastName
    const keyB = b.lastName
    if (keyA < keyB) return -1
    if (keyA > keyB) return 1
    return 0
  })

  return populatedUsers
}

function usersReducer(state = {}, action) {
  switch (action.type) {
    case 'USERS_REQUEST_SUCCEEDED': {
      const { users } = action
      const populatedUsers = populateUsers(users)

      saveItem(USERS, populatedUsers)

      return {
        ...state,
        users: populatedUsers,
      }
    }
    case 'UPDATE_USERS': {
      const { id, active } = action
      const index = state.users.findIndex((user) => user.id === id)
      const newUsersArray = [...state.users]
      newUsersArray[index].active = active

      saveItem(USERS, newUsersArray)

      return {
        ...state,
        users: newUsersArray,
      }
    }
    default:
      return state
  }
}

export default combineReducers({
  users: usersReducer,
})
