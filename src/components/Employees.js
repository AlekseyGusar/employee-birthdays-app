import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import Employee from './Employee'
import { fetchAndLoadUsers } from '../actions/actions'
import { ALPHABET } from '../constants/constans'

function mapStateToProps(state) {
  return {
    users: state.users && state.users.users,
  }
}

const mapDispatchToProps = (dispatch) => {
  const dispatchObj = {
    fetchUsers: () => dispatch(fetchAndLoadUsers()),
  }
  return dispatchObj
}

const Employees = (props) => {
  useEffect(() => {
    props.fetchUsers()
  }, [])

  const employeeList = () => {
    const employeeArray = []
    if (props.users) {
      ALPHABET.forEach((letter) => {
        const arrayItem = []

        arrayItem.push(
          <li className="text" key={letter}>
            {letter}
          </li>,
        )

        const index = props.users.findIndex((user) => user.letter === letter)
        if (index !== -1) {
          let i = index
          while (props.users[i] && props.users[i].letter === letter) {
            arrayItem.push(
              <Employee
                key={props.users[i].id}
                lastName={props.users[i].lastName}
                firstName={props.users[i].firstName}
                active={props.users[i].active}
                id={props.users[i].id}
              ></Employee>,
            )
            i += 1
          }
        } else {
          arrayItem.push(
            <li className="text" key={`emploeeListEmpty${letter}`}>
              {' '}
              ----{' '}
            </li>,
          )
        }
        employeeArray.push(<ul className="employee-item">{arrayItem}</ul>)
        return employeeArray
      })
    }
    return employeeArray
  }
  return (
    <div>
      <ul className="employee-list-wrapper">{props.users && employeeList()}</ul>
    </div>
  )
}

Employees.propTypes = {
  fetchUsers: propTypes.func.isRequired,
  users: propTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees)
