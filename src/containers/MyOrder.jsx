import React, { useContext } from 'react';

import '../styles/MyOrder.scss';

import iconclose from '../assets/icons/icon_close.png';
import flechita from '../assets/icons/flechita.svg';
import AppContext from '../context/AppContext';

const MyOrder = () => {
  const {
    state: { card },
  } = useContext(AppContext);
  return (
    <aside
      id="shoppingCartContainer"
      className="inactive cardShoppingContainer"
    >
      <div className="title-container">
        <img src={flechita} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {card.map(({ id, title, image, price }) => (
          <div key={`productItem-${id}`} className="shopping-card">
            <figure>
              <img src={image} alt={title} />
            </figure>
            <p>{title}</p>
            <p>${price}</p>
            <img src={iconclose} alt="close" />
          </div>
        ))}

        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>560.00</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
