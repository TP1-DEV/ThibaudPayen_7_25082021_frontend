import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import reportWebVitals from './tests/reportWebVitals'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import NewPost from './pages/NewPost'
import Profil from './pages/Profil'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/signin' exact component={SignIn} />
        <Route path='/newpost' exact component={NewPost} />
        <Route path='/profil' exact component={Profil} />
        <Redirect to='/' />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
