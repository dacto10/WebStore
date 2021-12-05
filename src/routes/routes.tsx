import { Routes, Route } from 'react-router-dom';
import Cart from '../views/app/Cart';
import Home from '../views/app/Home';
import Liked from '../views/app/Liked';
import Orders from '../views/app/Orders';
import Product from '../views/app/Product';
import ProductHandler from '../views/app/ProductHandler';
import SellingProducts from '../views/app/SellingProducts';
import Login from '../views/auth/Login';
import Register from '../views/auth/Register';

export default () => (
  <div className="container">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/liked" element={<Liked />}/>
      <Route path="/selling" element={<SellingProducts />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/orders" element={<Orders />}/>
      <Route path="/product" element={<Product />}/>
      <Route path="/handler" element={<ProductHandler />}/>
    </Routes>
  </div>
)