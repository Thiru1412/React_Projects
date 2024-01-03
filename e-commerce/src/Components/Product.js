import React , {useContext}from 'react';
import './Product.css'
import { Link , useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ProductAction,ProductDescription,ProductTitle,Price,ProductDetail,Specification,ImageConatiner,ViewButton,CartButton } from './StyledComponents';
import { CartContext } from '../Contexts/CartContext';


const Product = (props) => {
  
  let navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const {addProduct} = cartContext;

  const keys = Object.keys(props.specification);
  return (
    <ProductDescription key = {props.id}>
      <ImageConatiner src={props.img}></ImageConatiner>

      <ProductDetail>
        <ProductTitle>
          <Link to = {`/products/${props.id}`} className='title'>{props.title}</Link>
        </ProductTitle>
        <Specification>
          {
            keys.map((k,i) => <li key = {i}>{props.specification[`${k}`]}</li>)
          }
        </Specification>

        <ProductAction>
          <ViewButton onClick = {() => navigate(`/products/${props.id}`)}> View Product</ViewButton>
          <CartButton onClick={() => addProduct(props) }>Add to Cart</CartButton>
        </ProductAction>
      </ProductDetail>

      <Price>
        ₹{props.price}
      </Price>
    </ProductDescription>
  )
}

export default Product;