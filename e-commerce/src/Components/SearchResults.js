import React , {useState , useEffect}from 'react';

import { Fetcher } from '../Fetcher';
import { useSearchParams } from 'react-router-dom';
import Product from './Product';

const SearchResults = () => {
    const [products,setProducts] = useState({errormessage:'',data:[]});

    const [searchParams]= useSearchParams();
    const query = searchParams.get('s');
    
    useEffect(() => {
        const fetchData = async () => {
          const responseObject = await Fetcher(`/products?q=${query}`);
          setProducts(responseObject);
        }
        fetchData();
      },[query]);

      const renderProducts = () => {
        if(products.data.length > 0){
        const categoryProducts = products.data.map((product) => 
        <Product  id = {product.id} key = {product.id} title = {product.title} img = {product.img} specification = {product.specification} price = {product.price} />
        );
        return categoryProducts;
        }
        else{
            return <div>No Results Found</div>
        }
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

export default SearchResults