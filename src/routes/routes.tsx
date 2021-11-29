import { Routes, Route } from 'react-router-dom';
import Cart from '../views/app/Cart';
import Home from '../views/app/Home';
import Product from '../views/app/Product';
import Login from '../views/auth/Login';
import Register from '../views/auth/Register';

export default () => (
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/register" element={<Register />}/>
    <Route path="/cart" element={<Cart />}/>
    <Route path="/product/:id" element={<Product />}/>
  </Routes>
)