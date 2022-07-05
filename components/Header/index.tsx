import React from "react";

import Logo from "../logo";
import CartIcon from "../Cart";
import SearchIcon from "../search";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <div className="header__info-container">
        <h1 className="header__title">CHÁ DE COZINHA</h1>
        <div className="header__names">Ester {"&"} Fabricio</div>
      </div>
      <CartIcon className="header__cart" />
    </header>
  );
};

export default Header;
