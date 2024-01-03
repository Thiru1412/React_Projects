import logo from './logo.svg';
import './App.css';
import React , {useEffect, useState} from "react";

import { Fetcher } from './Fetcher';
import { Link , Outlet} from 'react-router-dom';
import ProductDetail from './Components/ProductDetail';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Cart from './Components/Cart';
import Category from './Components/Category';
import Layout from './Components/Layout';
import Home from './Components/Home';
import SearchResults from './Components/SearchResults';


function App() {
  const [categories,setCategories] = useState({errormessage:'',data:[]});



  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await Fetcher('/categories');
      setCategories(responseObject);
    }
    fetchData();
  },[]);
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element = {<Layout categories = {categories}/>} >
              <Route index element = {<Home />} />
              <Route path='/products/:id' element = {<ProductDetail />} />
              <Route path='/cart' element = {<Cart />} />
              <Route path='/search' element = {<SearchResults />} />
              <Route path='/categories/:catId' element = {<Category />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
