import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import Header from "../../components/Header";
import Product from "../../components/Product";
import { CartContext } from "../../contexts/cart";
import { FaLock, FaArrowLeft, FaTimes } from "react-icons/fa";
import Link from "next/link";
import ScrollToTop from "../../components/ScrollToTop";
import Swal from "sweetalert2";
import Loading from "../../components/Loading";
import Head from "next/head";

const Cart: React.FC = () => {
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const [loading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>({ email: "", name: "" });
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const openModal = () => {
    if ((document.body.getBoundingClientRect().top * -1, window.innerHeight)) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setTimeout(() => {
        document.body.classList.add("no-overflow");
        setIsModalOpen(true);
      }, 360);
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    document.body.classList.remove("no-overflow");
    setUserData({ email: "", name: "" });
    setIsModalOpen(false);
  };

  const handleUserDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData((prevState: any) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const productsId = cartProducts?.map(({ product_id }) => product_id);
    const productsName = cartProducts?.map(({ product_name }) => product_name);
    const body = JSON.stringify({
      id: productsId,
      products: productsName,
      name: userData.name,
      email: userData.email,
    });
    setIsLoading(true);
    const send = await fetch(`${process.env.API_WEDDING}/products`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body,
    });
    const res = await send.json();
    if (send.status === 200) {
      Swal.fire({
        title: "Sucesso",
        timer: 2500,
        timerProgressBar: true,
        html: res.message,
        showConfirmButton: true,
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Aviso",
        timer: 2500,
        timerProgressBar: true,
        html: res.message,
        showConfirmButton: true,
        icon: "warning",
      });
    }
    closeModal();
    setIsLoading(false);
    setCartProducts([]);
  };
  const emptyCart = () => cartProducts && cartProducts?.length < 1;

  return (
    <main className="cart-page">
      <Head>
        <title>Carrinho</title>
      </Head>
      <Header />
      <h2 className="cart-page__title">Carrinho</h2>

      <aside className="cart-page__product-container">
        <ScrollToTop />
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
            <FaTimes size={20} className="cart-page__info-close" onClick={closeModal} />
            <h2 className="cart-page__info-container-title">CHÁ DE COZINHA</h2>
            <p className="cart-page__info-container-description">
              Para podermos reservar estes produtos, precisamos de algumas informações suas.
            </p>
            <form className="cart-page__info-container__form" onSubmit={handleSubmit}>
              <div className="cart-page__info-container__form-container">
                <div className="cart-page__info-container__form-input-container">
                  <label htmlFor="Name">Nome: </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleUserDataChange}
                    required
                  />
                </div>
                <div className="cart-page__info-container__form-input-container">
                  <label htmlFor="email">Email: </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    onChange={handleUserDataChange}
                    required
                  />
                </div>
              </div>
              {loading && <Loading style={{ margin: "0 auto", flex: 2 }} />}
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
