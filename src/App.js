import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import './index.css'
import Orders from './components/Orders/Orders'
import Account from './components/Account/Account'
import LoginPage from './components/LoginPage/LoginPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'
import data from './components/Items/data'

const App = () => {
    const { items } = data;
    const [filteredItem, setFilteredItem] = useState(items)
    const [cart , setCart] = useState([])
    const totalItems = cart.length;
    const itemTotal = cart.reduce((total, item) => total + item.price * item.cartCount, 0);
    const taxes = itemTotal * 0.12;
    const subTotal = itemTotal + taxes;
    
    const handleVegFilter = (event) => { 
        if(event.target.checked){
            const vegFilter = items.filter((item) => item.isVeg)
            setFilteredItem(vegFilter)
        }else{
            setFilteredItem(items)
        }
    }

    useEffect(() => {
        console.log("cart",cart);
    },[cart])

    useEffect(() => {
        console.log("filteredItem",filteredItem);
        
    },[filteredItem])

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
  return (
    <Router>
        <div className='container'>
          {/* <LoginPage /> */}
          <CartProvider>
            <Navbar />
            <Switch>
              <Route exact path='/home'>
                <Home
                filteredItem={filteredItem}
                addToCart={addToCart}
                handleCartReduce={handleCartReduce} />
              </Route>
              <Route path='/orders'>
                <Orders 
                cart={cart}
                addToCart={addToCart}
                handleCartReduce={handleCartReduce}
                totalItems={totalItems}
                itemTotal={itemTotal}
                taxes={taxes}
                subTotal={subTotal} />
              </Route> 
              <Route path='/account' component={Account} />
            </Switch>
          </CartProvider>
        </div>
    </Router>
    
  )
}

export default App


