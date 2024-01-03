import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Fetcher } from '../Fetcher';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
const ProductDetail = () => {
    const [ProductDetail,setProductDetail] = useState({errormessage:'',data:[]});
    let {id} = useParams();
    var keys;
    let navigate = useNavigate()
    const cartContext = useContext(CartContext);
  const {addProduct} = cartContext;

    useEffect(() => {
      const fetchData = async() => {
        const responseObject = await Fetcher(`/products/${id}`);
        setProductDetail(responseObject);
        console.log(keys);
      }
      fetchData();
    },[id]);
  return (
    <div key = {ProductDetail.data.id} className='product'>
      <img src={ProductDetail.data.img}></img>

      <div className='details'>
        <h2>
          {ProductDetail.data.title}
        </h2>
        <ul className='specification'>
          {
          ProductDetail.data.specification && Object.keys(ProductDetail.data.specification).map((k,i) => <li key = {i}>{ProductDetail.data.specification[`${k}`]}</li>)
          }
        </ul>

        <div className='product-action'>
          <button className='add-to-cart' onClick={() => addProduct(ProductDetail.data)}>Add to Cart</button>
        </div>
      </div>

      <div className='price'>
        <h2>₹{ProductDetail.data.price}</h2>
      </div>
    </div>
  )
}

export default ProductDetail;