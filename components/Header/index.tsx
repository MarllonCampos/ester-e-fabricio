import React from "react";

import Logo from "../logo";
import CartIcon from "../cart";
import SearchIcon from "../search";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <div className="header__info-container">
        <h1 className="header__title">CHÁ DE COZINHA</h1>
        <div className="header__search">
          <input type="text" placeholder="Pesquise aqui..." className="header__input" />
          <SearchIcon as="button" className="header__search-icon" />
        </div>
      </div>
      <CartIcon className="header__cart" />
    </header>
  );
};

export default Header;
