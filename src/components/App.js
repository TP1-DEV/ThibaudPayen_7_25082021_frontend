import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Header from './Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  )
}

export default App
