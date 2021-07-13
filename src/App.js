import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import './index.css'
import Orders from './components/Orders/Orders'
import Account from './components/Account/Account'
import LoginPage from './components/LoginPage/LoginPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'

const App = () => {
  return (
    <Router>
        <div className='container'>
        {/* <LoginPage /> */}
        <CartProvider>
        <Navbar />
          <Switch>
          <Route exact path='/home' component={Home} />
          <Route path='/orders' component={Orders} />  
          <Route path='/account' component={Account} />
          </Switch>
        </CartProvider>
        </div>
    </Router>
    
  )
}

export default App


