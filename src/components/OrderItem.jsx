import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import iconclose from '../assets/icons/icon_close.png';

const OrderItem = ({ id, title, image, price }) => {
  const { removeFromCard } = useContext(AppContext);
  return (
    <div className="shopping-card">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <p>{title}</p>
      <p>${price}</p>
      <img src={iconclose} alt="close" onClick={() => removeFromCard({ id })} />
    </div>
  );
};

export default OrderItem;
