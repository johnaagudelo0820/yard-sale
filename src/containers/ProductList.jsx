import React, { useState } from 'react';
import ProductItem from '../components/ProductItem';

import '@styles/ProductList.scss';

const API = `http://api.escuelajs.co/api/v1/products`;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useState(() => {
    const getProducts = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <section className="main-container">
      <div className="cards-container">
        {products.map((product) => (
          <ProductItem key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
