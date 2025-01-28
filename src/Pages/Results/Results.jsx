import React, { useState, useEffect } from 'react';
import LayOut from '../../Component/Layout/Layout';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { productUrl } from '../../Api/endpoint';
import classes from './Results.module.css'; // Ensure this import is correct
import ProductCard from '../../Component/Product/ProductCard'
import Loader from '../../Component/Loader/Loader';
function Results() {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    if (categoryName) {
      console.log(categoryName);

      axios.get(`${productUrl}/products/category/${categoryName}`)
        .then((res) => {
          setResults(res.data);
          setLoading(false);
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, []);

 

  return (
    <LayOut> 
 <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        
        

         {isloading?(<Loader/>):( <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>)}
      </section>
    </LayOut>
  );
}

export default Results;
