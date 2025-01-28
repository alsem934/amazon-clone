import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endpoint';
import LayOut from '../../Component/Layout/Layout';
import Loader from '../../Component/Loader/Loader';
import ProductCard from '../../Component/Product/ProductCard';
import classes from './ProductDetail.module.css';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
     
      setIsLoading(true)
      axios.get(`${productUrl}/products/${productId}`)
        .then((res) => {
          setProduct(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          
          setIsLoading(false);
        });
    
  }, []);

 

 
  return (
    <LayOut> 
   {isLoading? (<Loader/>):(
   <ProductCard
    product={product}
    renderDesc={true}

  flex={true}
    
    
renderAdd={true}

/>)}
    </LayOut>
  )
}

export default ProductDetail;