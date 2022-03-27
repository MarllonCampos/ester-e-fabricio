import React from "react";

import Logo from "../logo";
import CartIcon from "../cart";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <h1 className="header__title">CHÁ DE COZINHA</h1>
      <CartIcon />
    </header>
  );
};

export default Header;
