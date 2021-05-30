import axios from 'axios'
import { getItem } from '../services/localStorageService'
import { API, USERS } from '../constants/constans'

export const usersRequestSucceeded = (users) => {
  const actionObj = { type: 'USERS_REQUEST_SUCCEEDED', users }
  return actionObj
}

export const usersRequestFailed = (error) => {
  const actionObj = { type: 'USERS_REQUEST_FAILED', error }
  return actionObj
}

export const updateUsers = (id, active) => {
  const actionObj = { type: 'UPDATE_USERS', id, active }
  return actionObj
}

export const fetchAndLoadUsers = () => (dispatch) => {
  const savedUsers = getItem(USERS)
  if (savedUsers) {
    dispatch(usersRequestSucceeded(savedUsers))
  } else {
    axios
      .get(API)
      .then((response) => dispatch(usersRequestSucceeded(response.data)))
      .catch((error) => dispatch(usersRequestFailed(error)))
  }
}
