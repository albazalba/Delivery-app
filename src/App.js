import React, {useState, useEffect, useContext} from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import './index.css'
import Orders from './components/Orders/Orders'
import Account from './components/Account/Account'
import LoginPage from './components/LoginPage/LoginPage'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'
import data from './components/Items/data'
import { AuthProvider } from './context/AuthContext'
import Signup from './components/LoginPage/Signup'
import PrivateRoute from './privateRoute'
import { CartContext } from './context/CartContext'

const App = () => {
    // console.log(cart);
    const { items } = data;
    const [filteredItem, setFilteredItem] = useState(items)
    const [cart, setCart] = useContext(CartContext);
    const [searchItem, setSearchitem] = useState('')
    // const [cart , setCart] = useState([])
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
  return (
     <CartProvider> 
     <AuthProvider>
        <Router>
        <div className='container'>
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={LoginPage} />
            <div>
                <Navbar />
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
        </div>
        </Router>
     </AuthProvider>
     </CartProvider>
  )
}

export default App


