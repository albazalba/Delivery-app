import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import './index.css'
import Orders from './components/Orders/Orders'
import Account from './components/Account/Account'
import LoginPage from './components/LoginPage/LoginPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
        <div className='container'>
        {/* <LoginPage /> */}
        <Navbar />
          <Switch>
          <Route exact path='/home' component={Home} />
          <Route path='/orders' component={Orders} />  
          <Route path='/account' component={Account} />
          </Switch>
        </div>
    </Router>
    
  )
}

export default App


