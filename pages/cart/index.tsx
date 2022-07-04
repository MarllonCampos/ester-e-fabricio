import React, { FormEvent, useContext, useState } from "react";
import Header from "../../components/Header";
import Product from "../../components/Product";
import { CartContext } from "../../contexts/cart";
import { FaLock, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const Cart: React.FC = () => {
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const { cartProducts } = useContext(CartContext);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const products_id = cartProducts?.map(({ product_id }) => product_id);
    console.log(products_id);
  };
  const emptyCart = () => cartProducts && cartProducts?.length < 1;

  return (
    <main className="cart-page">
      <Header />
      <h2 className="cart-page__title">Carrinho</h2>

      <aside className="cart-page__product-container">
        {emptyCart() ? (
          <div>
            <Link href="/" passHref>
              <a className="cart-page__goes-back">
                <FaArrowLeft className="cart-page__goes-back-arrow" />
                Voltar
              </a>
            </Link>
            <p className="cart-page__empty">NÃO HÁ PRODUTOS NO CARRINHO</p>
          </div>
        ) : (
          <div className="Products-container">
            {cartProducts &&
              cartProducts.map(({ product_id, ...product }) => (
                <Product {...product} product_id={product_id} key={product_id} id={product_id} />
              ))}
          </div>
        )}
      </aside>
      <button disabled={emptyCart()} onClick={openModal} className="cart-page__reserve-button">
        Reserve Já
        {emptyCart() && <FaLock className="cart-page__lock" size={16} />}
      </button>
      {!emptyCart() && modalIsOpen && (
        <div className="cart-page__info" onClick={closeModal}>
          <div className="cart-page__info-container" onClick={(event) => event?.stopPropagation()}>
            <h2 className="cart-page__info-container-title">CHÁ DE COZINHA</h2>
            <p className="cart-page__info-container-description">
              Para podermos reservar estes produtos, precisamos de algumas informações suas.
            </p>
            <form className="cart-page__info-container__form" onSubmit={handleSubmit}>
              <div className="cart-page__info-container__form-container">
                <div className="cart-page__info-container__form-input-container">
                  <label htmlFor="nome">Nome: </label>
                  <input type="text" name="nome" id="nome" />
                </div>
                <div className="cart-page__info-container__form-input-container">
                  <label htmlFor="email">Email: </label>
                  <input type="text" name="email" id="email" />
                </div>
              </div>

              <button
                type="submit"
                className="cart-page__info-container__form-send"
                disabled={emptyCart()}
              >
                Enviar
                {emptyCart() && <FaLock className="cart-page__lock" size={16} />}
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;
