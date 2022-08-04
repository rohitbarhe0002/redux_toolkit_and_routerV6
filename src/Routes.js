import { HomeSharp } from '@material-ui/icons'
import React from 'react'
import {
  BrowserRouter,
  Routes as Routers,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import ProductList from './components/ProductList';
function Routes() {
  return (
  //   <Router>
  //   <Routers>
  //   <Route
  //       path="/"
  //       element={<Home />}
  //     />
  //   <Route
  //       path="Login"
  //       element={<Login />}
  //     />
  //     {/* <Route path="/products/:category">
  //       <ProductList />
  //     </Route>
  //     <Route path="/product/:id">
  //       <Product />
  //     </Route>
  //     <Route path="/cart">
  //       <Cart />
  //     </Route>
  //     <Route path="/success">
  //       <Success />
  //     </Route>
  //     <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
  //     <Route path="/register">
  //       {user ? <Redirect to="/" /> : <Register />}
  //     </Route> */}
  //   </Routers>
  // </Router>
  <BrowserRouter>
  <Routers>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/products" element={<ProductList />} />

  </Routers>
</BrowserRouter>
  )
}

export default Routes