import React, { useContext, useState } from 'react';

import Menu from '@components/Menu';

import '@styles/Header.scss';

import logo from '@assets/logos/logo_yard_sale.svg';
import cart from '@assets/icons/icon_shopping_cart.svg';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const {
    state: { card },
  } = useContext(AppContext);

  const handleToogle = () => setToggle(!toggle);

  return (
    <nav>
      {/* <img src={menu} className="menu" alt="menu" /> */}
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/yard-sale/">All</a>
          </li>
          <li>
            <a href="/yard-sale/">Clothes</a>
          </li>
          <li>
            <a href="/yard-sale/">Electrinics</a>
          </li>
          <li>
            <a href="/yard-sale/">Furnitures</a>
          </li>
          <li>
            <a href="/yard-sale/">Toys</a>
          </li>
          <li>
            <a href="/yard-sale/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToogle}>
            john@example.com
          </li>
          <li
            className="navbar-shopping-card"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={cart} alt="chopping card" />
            {card.length > 0 ? <div>{card.length}</div> : null}
          </li>
        </ul>
      </div>

      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}

      {/* <div className="mobile-menu inactive">
        <div>
          <ul>
            <li>
              <a href="/yard-sale/">CATEGORIES</a>
            </li>
            <li>
              <a href="/yard-sale/">All</a>
            </li>
            <li>
              <a href="/yard-sale/">Clothes</a>
            </li>
            <li>
              <a href="/yard-sale/">Electronics</a>
            </li>
            <li>
              <a href="/yard-sale/">Fornitures</a>
            </li>
            <li>
              <a href="/yard-sale/">Toys</a>
            </li>
            <li>
              <a href="/yard-sale/">Others</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/yard-sale/">My orders</a>
            </li>
            <li>
              <a href="/yard-sale/">My account</a>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <a href="/yard-sale/" className="email">
              john@example.com
            </a>
          </li>
          <li>
            <a href="/yard-sale/" className="sign-out">
              Sign out
            </a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Header;
