import React from 'react';

import '../styles/Header.scss';

const Header = () => {
  return (
    <nav>
      <img src="./icons/icon_menu.svg" className="menu" alt="menu" />
      <div className="navbar-left">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electrinics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email">john@example.com</li>
          <li className="navbar-shopping-card">
            <img src="./icons/icon_shopping_cart.svg" alt="chopping card" />
            <div>2</div>
          </li>
        </ul>
      </div>
      <div className="desktop-menu inactive">
        <ul>
          <li>
            <a href="/" className="title">
              My orders
            </a>
          </li>
          <li>
            <a href="/">My account</a>
          </li>
          <li>
            <a href="/">Sign out</a>
          </li>
        </ul>
      </div>
      <div className="mobile-menu inactive">
        {/* <div> */}
        <div>
          <ul>
            <li>
              <a href="/">CATEGORIES</a>
            </li>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Fornitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">My orders</a>
            </li>
            <li>
              <a href="/">My account</a>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <a href="/" className="email">
              john@example.com
            </a>
          </li>
          <li>
            <a href="/" className="sign-out">
              Sign out
            </a>
          </li>
        </ul>
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Header;
