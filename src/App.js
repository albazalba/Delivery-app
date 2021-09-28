import React, {useState, useEffect, useContext} from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import './index.css'
import Orders from './components/Orders/Orders'
import Account from './components/Account/Account'
import LoginPage from './components/LoginPage/LoginPage'
import { HashRouter as Router, Route, Switch, Redirect, useLocation } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'
import data from './components/Items/data'
import { AuthProvider } from './context/AuthContext'
import Signup from './components/LoginPage/Signup'
import PrivateRoute from './privateRoute'
import { CartContext } from './context/CartContext'
import MapPage from './components/MapPage/MapPage'
import PropagateLoader from "react-spinners/PropagateLoader";
import styled from '@emotion/styled'
import { ToastContainer} from 'react-toastify';
import { useAuth } from '../src/context/AuthContext'
import { withRouter } from "react-router-dom";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";



const GET_MY_ITEMS = gql`
query FetchItem {
    items {
      id
      name
      description
      price
      image
      isVeg
    }
  }`;

const App = () => {
    const { loading, error, data } = useQuery(GET_MY_ITEMS);
    
    // const { items } = data;
    const [filteredItem, setFilteredItem] = useState([]);
    const [cart, setCart] = useContext(CartContext);
    const [searchItem, setSearchitem] = useState('')
    // const [cart , setCart] = useState([])
    const totalItems = cart.length;
    const itemTotal = cart.reduce((total, item) => total + item.price * item.cartCount, 0);
    const taxes = itemTotal * 0.12;
    const subTotal = itemTotal + taxes;
    const {currentUser} = useAuth()
    // console.log(location);
    
    const handleVegFilter = (event) => { 
        const items = data.items
        if(items.length){
            if(event.target.checked){
                const vegFilter = items.filter((item) => item.isVeg)
                setFilteredItem(vegFilter)
            } else {
                const allItems = items
                setFilteredItem(allItems)
            }
        }
    }

    useEffect(() => {
        console.log("cart",cart);
    },[cart])

    useEffect(() => {
        console.log("filteredItem",filteredItem);
        
    },[filteredItem])
    
    useEffect(() => {
        console.log("filteredItem",filteredItem);
        setFilteredItem(data?.items)
    },[data])

    const onSearch = (e) => {
        setSearchitem(e.target.value)
        console.log(searchItem);
    }

    const addToCart = (item) => {
        const exist =cart.find((x) => x.id === item.id);
        if(exist) {
            setFilteredItem(filteredItem.map((x) =>
            x.id === item.id ? {...exist, cartCount: exist.cartCount + 1} : x
            ));
            setCart(cart.map((x) =>
            x.id === item.id ? {...exist, cartCount: exist.cartCount + 1} : x
            ));
            
        } else {
            setCart([...cart, { ...item, cartCount: 1}]);
            setFilteredItem(filteredItem.map((x) =>
            x.id === item.id ? {...item, cartCount: 1} : x
            ));
        }
    }


    const handleCartReduce =  (item) => {
        const exist =cart.find((x) => x.id === item.id);
        if(exist.cartCount === 1) {
            setCart(cart.filter((x) => x.id !== item.id));
            setFilteredItem(
                filteredItem.map((x) => 
                x.id === item.id ? { ...exist, cartCount: exist.cartCount - 1 }: x
                )
            );
        } else {
            setCart(
                cart.map((x) => 
                x.id === item.id ? { ...exist, cartCount: exist.cartCount - 1 }: x
                )
            );
            setFilteredItem(
                filteredItem.map((x) => 
                x.id === item.id ? { ...exist, cartCount: exist.cartCount - 1 }: x
                )
            );
        }
    }
  if(loading){
     return <LoadingPage>
        <div>
            <h2 style={{color:"#ea384d", padding:"15px"}}>BURGER JOINT</h2>
        </div>
        <div>
            <PropagateLoader loading={true} color="#ea384d" size={15} />    
        </div>
     </LoadingPage>
  }  
  console.log(currentUser);
  return (  
     <Router>
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={LoginPage} />
            <ToastContainer />
    
         <div>
                { currentUser && <Navbar /> }
                <Switch>
                    <PrivateRoute exact path='/home'>
                        <Home
                        handleVegFilter={handleVegFilter}
                        filteredItem={filteredItem}
                        addToCart={addToCart}
                        handleCartReduce={handleCartReduce}
                        onSearch={onSearch}
                        searchItem={searchItem} />
                    </PrivateRoute>
                    <Redirect exact from="/" to="/home" />
                    <PrivateRoute path='/map'>
                        <MapPage />
                    </PrivateRoute> 
                    <PrivateRoute path='/orders'>
                        <Orders 
                        cart={cart}
                        addToCart={addToCart}
                        handleCartReduce={handleCartReduce}
                        totalItems={totalItems}
                        itemTotal={itemTotal}
                        taxes={taxes}
                        subTotal={subTotal} />
                    </PrivateRoute> 
                    <PrivateRoute path='/account' component={Account} />
                    </Switch>
            </div>   
        </Router>

  )
}

const LoadingPage = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: white;
`

export default App;


