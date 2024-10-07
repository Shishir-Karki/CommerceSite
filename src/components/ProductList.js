import React, { useEffect, useState } from 'react';
import Product from './Product';

const ProductList = ({ query }) => {
  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  
  const dataFetch = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const products = await data.json();
    setProductList(products);
  };

  
  useEffect(() => {
    const results = productList.filter((product) =>
      product.title ? product.title.toLowerCase().includes(query.toLowerCase()) : false
    );
    setFilteredProducts(results);
  }, [productList, query]); 

 
  useEffect(() => {
    dataFetch();
  }, []); 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductList;
