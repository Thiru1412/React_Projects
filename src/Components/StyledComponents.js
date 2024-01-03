
import styled from "styled-components";

const ProductTitle = styled.h2`
    margin: 0px;
    width:300px;
    text-align: left;
    padding: 20px;
  `;

  const ImageConatiner = styled.img`
    width: 250px;
    height: 100x;
  `;

  const Specification = styled.ul`
    padding: 0px 60px;
  `;

  const ProductDescription = styled.div`
    display: flex;
    margin: 5px;
    border-bottom:1px solid black;
    padding: 10px 0px;
    box-sizing: border-box;
  `;

  const ProductAction = styled.div`
    padding: 10px;
    display: flex;
  `;

  const ActionButton = styled.button`
    width:200px;
    height: 35px;
    margin: 0px 25px;   
    border: 1px solid white;
    color: white;
    font-weight: 600;
    border-radius: 10px;
  `;

  const ViewButton = styled(ActionButton)`
    background-color: green;
  `;

  const CartButton = styled(ActionButton)`
    background-color: #ff9f00;
  `;

  const Price = styled(ProductTitle)``;

  const ProductDetail = styled.div`
    padding: 0px 20px;
    width:700px;
  `;


  export {Price,ProductAction,ProductDescription,ProductDetail,ProductTitle,ViewButton,CartButton,Specification,ImageConatiner};