import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {CartProvider} from './context/CartContext'
import {client} from './client'
import {ApolloProvider} from '@apollo/client'


ReactDOM.render(<CartProvider><ApolloProvider client={client}> <App /></ApolloProvider></CartProvider>, document.getElementById('root'));
