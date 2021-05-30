import React, { useCallback } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { NOTACTIVE, ACTIVE } from '../constants/constans'
import { updateUsers } from '../actions/actions'

const mapDispatchToProps = (dispatch) => {
  const dispatchObj = {
    saveUsers: (id, active) => dispatch(updateUsers(id, active)),
  }
  return dispatchObj
}

const Employee = (props) => {
  const { id, lastName, firstName, active } = props
  const onValueChange = useCallback((event) => {
    props.saveUsers(id, event.target.value)
  })
  return (
    <li className="text padding-bottom">
      {' '}
      <span className={`${active === ACTIVE ? 'active' : ''}`}>
        {lastName} {firstName}
      </span>
      <div className="radio padding-bottom">
        <label className="padding-bottom">
          <input
            type="radio"
            value={NOTACTIVE}
            checked={active === NOTACTIVE}
            onChange={onValueChange}
            className="radio-label"
          />
          {NOTACTIVE}
        </label>
        <label>
          <input
            type="radio"
            value={ACTIVE}
            checked={active === ACTIVE}
            onChange={onValueChange}
            className="radio-label"
          />
          {ACTIVE}
        </label>
      </div>
    </li>
  )
}

Employee.propTypes = {
  lastName: propTypes.string.isRequired,
  firstName: propTypes.string.isRequired,
  active: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  saveUsers: propTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Employee)
