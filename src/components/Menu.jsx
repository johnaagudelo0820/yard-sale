import React from 'react';

import '@styles/Menu.scss';

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <a href="/yard-sale/" className="title">
            My orders
          </a>
        </li>
        <li>
          <a href="/yard-sale/">My account</a>
        </li>
        <li>
          <a href="/yard-sale/">Sign out</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
