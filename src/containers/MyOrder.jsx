import React, { useContext } from 'react';

import '../styles/MyOrder.scss';

import flechita from '../assets/icons/flechita.svg';
import AppContext from '../context/AppContext';
import OrderItem from '../components/OrderItem';

const MyOrder = () => {
  const {
    state: { card },
  } = useContext(AppContext);

  const sumTotal = () => {
    const reducerFunc = (accumalator, { price }) => accumalator + price;
    const totalPrice = card.reduce(reducerFunc, 0);
    return totalPrice;
  };

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
        {card.map((product) => (
          <OrderItem key={`productItem-${product.id}`} {...product} />
        ))}

        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>{`$ ${sumTotal()}`}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
