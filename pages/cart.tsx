import React, { useContext } from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import { CartContext } from "../contexts/cart";

// import { Container } from './styles';

const Cart: React.FC = () => {
  const { cartProducts } = useContext(CartContext);

  return (
    <main className="cart-page">
      <Header />
      <h4>Carrinho</h4>

      <aside>
        {cartProducts && cartProducts.length < 1 ? (
          <p className="cart__modal-empty">NÃO HÁ PRODUTOS NO CARRINHO</p>
        ) : (
          <div className="Products-container">
            {cartProducts &&
              cartProducts.map(({ product_id, ...product }) => (
                <Product {...product} product_id={product_id} key={product_id} id={product_id} />
              ))}
          </div>
        )}
      </aside>
    </main>
  );
};

export default Cart;
