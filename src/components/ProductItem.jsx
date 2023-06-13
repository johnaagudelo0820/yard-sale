import React, { useContext } from 'react';

import addCardImage from '@assets/icons/bt_add_to_cart.svg';

import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext';

// "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

const ProductItem = ({ product: { title, images, price } }) => {
  const { addToCard } = useContext(AppContext);

  const handlerCart = (product) => {
    addToCard(product);
  };

  const [image] = images ?? [
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  ];

  return (
    <div className="product-item">
      <img src={image} alt={title} className="product-img" />
      <div className="product-info">
        <div>
          <p>$ {price}</p>
          <p>{title}</p>
        </div>
        <figure onClick={() => handlerCart({ title, images, price })}>
          <img src={addCardImage} alt="add-card" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
