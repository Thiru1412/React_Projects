import React, { useContext , useEffect, useState} from 'react';
import styled from 'styled-components';
import { CartContext } from '../Contexts/CartContext';
import { Link , useNavigate} from 'react-router-dom';

const Cart = () => {
  const {getItems , clearCart ,increaseQuantity , decreaseQuantity , removeProduct} = useContext(CartContext);
  let total = 0;
  let navigate = useNavigate();
  const [cartItems,setCartItems] = useState([]);

  useEffect(()=>{
    setCartItems(getItems());
  },[getItems])

  const renderCart = () => {
    if(cartItems.length > 0){
      return cartItems.map((p,i) =>{
        total+=p.price*p.quantity;
        return <tr>
          <td>
            <Link to={`/products/${p.id}`}>{p.title}</Link>
            <Button onClick={() => setCartItems(removeProduct(p))}>remove</Button>
          </td>
          <td>
            {p.quantity}
            <Button onClick={() => setCartItems(increaseQuantity(p))}>+</Button>
            <Button onClick={() => setCartItems(decreaseQuantity(p))}>-</Button>
          </td>
          <td>
            {p.price}   
          </td>
        </tr>
      })
    }
    else{
      return <tr>No Items in Cart</tr>
    }
  }

  const Button = styled.button`
  margin:0px 5px;
  `;
  const CartConatiner = styled.div`
  display:grid;
  width:1300px;
  `;

  const CartHeader = styled.h1`
  padding:0px 30px;
  `

  const CartTable = styled.table`
  width:100%;
  padding:50px 30px;
  `;

  const CartHeading = styled.th`
  text-align:left;
  `
  ;

  const ClearButton = styled.button`
  height:30px;
  width:50px;
  `;

  const Total = styled.h2``;

  const Line = styled.hr`width:100%;`
  const CartBottom = styled.div`
    display:flex;
    justify-content:space-between;
    padding:10px 30px;

  `;

  const CartItems = styled.div``;

  return (
    <CartConatiner>
    <CartHeader>
      Cart Items
    </CartHeader>

    <Line></Line>


    <CartTable>
      <tr>
        <CartHeading>Items</CartHeading>
        <CartHeading>Quantity</CartHeading>
        <CartHeading>Price</CartHeading>
      </tr>
        {
          renderCart()
        }
    </CartTable>

      <Line></Line>
    <CartBottom>
      <ClearButton onClick={() => setCartItems(clearCart())}>Clear</ClearButton>

      <Total> ₹ {total}</Total>
    </CartBottom>

    </CartConatiner>
  )
}

export default Cart