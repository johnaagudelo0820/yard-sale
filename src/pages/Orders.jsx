import React from 'react';

import '../styles/Orders.scss';

import flechitaImage from '../assets/icons/flechita.svg';

const Orders = () => {
  return (
    <div className="my-order">
      <div className="my-order-container">
        <h1 className="title">My orders</h1>
        <div className="my-order-content">
          <div className="order">
            <p>
              <span>04.25.21</span>
              <span>6 articles</span>
            </p>
            <p>1560.00</p>
            <img src={flechitaImage} alt="arrow" />
          </div>
          <div className="order">
            <p>
              <span>04.25.21</span>
              <span>6 articles</span>
            </p>
            <p>1560.00</p>
            <img src={flechitaImage} alt="arrow" />
          </div>
          <div className="order">
            <p>
              <span>04.25.21</span>
              <span>6 articles</span>
            </p>
            <p>1560.00</p>
            <img src={flechitaImage} alt="arrow" />
          </div>
          <div className="order">
            <p>
              <span>04.25.21</span>
              <span>6 articles</span>
            </p>
            <p>1560.00</p>
            <img src={flechitaImage} alt="arrow" />
          </div>
          <div className="order">
            <p>
              <span>04.25.21</span>
              <span>6 articles</span>
            </p>
            <p>1560.00</p>
            <img src={flechitaImage} alt="arrow" />
          </div>
          <div className="order">
            <p>
              <span>04.25.21</span>
              <span>6 articles</span>
            </p>
            <p>1560.00</p>
            <img src={flechitaImage} alt="arrow" />
          </div>
          <div className="order">
            <p>
              <span>04.25.21</span>
              <span>6 articles</span>
            </p>
            <p>1560.00</p>
            <img src={flechitaImage} alt="arrow" />
          </div>
          <div className="order">
            <p>
              <span>04.25.21</span>
              <span>6 articles</span>
            </p>
            <p>1560.00</p>
            <img src={flechitaImage} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
