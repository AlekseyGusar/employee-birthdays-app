import React from 'react'
import { useSelector } from 'react-redux'
import { ACTIVE, MONTH_LIST } from '../constants/constans'
import { formatData } from '../utils/utils'

const sortedUsersByMonth = (users) => {
  const activeUsersList = []
  if (users && users.length !== 0) {
    users.forEach((user) => {
      if (user.active === ACTIVE) {
        activeUsersList.push(user)
      }
    })
  }
  activeUsersList.sort(function (a, b) {
    const keyA = a.indexFromCurentMonth
    const keyB = b.indexFromCurentMonth
    if (keyA < keyB) return -1
    if (keyA > keyB) return 1
    return 0
  })
  return activeUsersList
}

const createMonthObj = (activeUsersList) => {
  const usersByMonth = {}
  MONTH_LIST.forEach((monthObj, index) => {
    const userIndex = activeUsersList.findIndex(
      (user) => user.month === +Object.keys(MONTH_LIST[index])[0],
    )

    if (userIndex !== -1) {
      const usersChunk = []
      let i = userIndex

      while (activeUsersList[i] && activeUsersList[i].month === index + 1) {
        usersChunk.push(activeUsersList[i])
        i += 1
      }

      usersChunk.sort(function (a, b) {
        const keyA = a.lastName
        const keyB = b.lastName
        if (keyA < keyB) return -1
        if (keyA > keyB) return 1
        return 0
      })
      usersByMonth[usersChunk[0].indexFromCurentMonth] = usersChunk
    }
  })
  Object.entries(usersByMonth).sort((a, b) => b[1] - a[1])

  return usersByMonth
}

const usersPreparedForRender = (monthObj) => {
  const preparedUsers = []

  Object.entries(monthObj).forEach(([key, value]) => {
    preparedUsers.push(
      <li className="month-name text" key={`${key}${value[0].id}`}>
        {MONTH_LIST[value[0].month - 1][value[0].month]}
      </li>,
    )
    value.forEach((user) => {
      preparedUsers.push(
        <li className="text" key={user.id}>
          {user.lastName} {user.firstName} - {formatData(user.dob)}
        </li>,
      )
    })
  })
  return preparedUsers
}

const Birthdays = () => {
  const users = useSelector((state) => state.users.users)

  let preparedUsersList = []
  let activeUsersList = []
  if (users) {
    activeUsersList = sortedUsersByMonth(users)
    const monthObj = createMonthObj(activeUsersList)
    preparedUsersList = usersPreparedForRender(monthObj)
  }
  return (
    <div>
      <h3 className="app-header">Employees birthday</h3>
      <hr className="vertical-line"></hr>
      {!activeUsersList.length && <div>Employees List is empty</div>}
      <ul>{users && preparedUsersList}</ul>
    </div>
  )
}
export default Birthdays
