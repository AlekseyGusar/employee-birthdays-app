import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Employees from './components/Employees'
import Birthdays from './components/Birthdays'
import './App.css'

function App() {
  return (
    <div>
      <div className="App">
        <div>
          <h3 className="app-header">Employees</h3>
          <Switch>
            <Route path="/employees" component={Employees}></Route>
          </Switch>
        </div>
        <div>
          <hr className="horizontal-line"></hr>
        </div>
        <Birthdays></Birthdays>
      </div>
      <hr className="vertical-line"></hr>
    </div>
  )
}

export default withRouter(App)
