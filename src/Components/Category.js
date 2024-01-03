import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Fetcher } from '../Fetcher';

import Product from './Product';

const Category = (cat) => {
  const {catId} = useParams();
  const [products,setProducts] = useState({errormessage:'',data:[]});
  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await Fetcher(`/products?catId=${catId}`);
      setProducts(responseObject);
    }
    fetchData();
  },[catId]);
  
  const renderProducts = () => {
    const categoryProducts = products.data.map((product) => 
    <Product  id = {product.id} key = {product.id} title = {product.title} img = {product.img} specification = {product.specification} price = {product.price} />
    );
    return categoryProducts;
  }


  return (
    <div>
      {
        products.errorMessage && <div>Error : {products.errorMessage}</div>
      }
      {
        products.data && renderProducts()
      }
    </div>
  )
}

export default Category;