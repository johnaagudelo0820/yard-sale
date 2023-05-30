import React, { useState } from 'react';

import addCard from '@assets/icons/bt_add_to_cart.svg';

import '@styles/ProductItem.scss';

const ProductItem = () => {
  const [cart, setCart] = useState([]);

  const handlerCart = () => {
    setCart([]);
  };

  return (
    <div className="product-item">
      <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
        className="product-img"
      />
      <div className="product-info">
        <div>
          <p>120,00</p>
          <p>Bike</p>
        </div>
        <figure onClick={handlerCart}>
          <img src={addCard} alt="add-card" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
