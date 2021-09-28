import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {UserProvider} from './utils/userContext'
import Header from './components/header/Header'
import {Home, SignUp, SignIn, NewPost, Profile, UpdateProfile} from './pages/index'

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/signin' exact component={SignIn} />
          <Route path='/newpost' exact component={NewPost} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/update-profile' exact component={UpdateProfile} />
          <Redirect to='/' />
        </Switch>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
