/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import Link from "next/link";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import reservedPlate from "/public/placa-reservado.png";
export interface ProductInterface extends React.HTMLProps<HTMLDivElement> {
  product_id: string;
  product_name: string;
  product_desc: string;
  product_img: string;
  product_reserved: boolean;
}
const Product = ({
  product_id,
  product_name,
  product_desc,
  product_img,
  product_reserved,
  ...props
}: ProductInterface) => {
  const { toggleProductOnCart, cartProducts } = useContext(CartContext);

  const productOnCart = !!cartProducts?.find(
    ({ product_id: cartProductId }) => cartProductId === product_id
  );

  const cartButtonText = productOnCart ? "Remover do Carrinho" : "Adicionar ao Carrinho";

  const reserveProduct = () => {
    const product = { product_id, product_name, product_desc, product_img, product_reserved };
    toggleProductOnCart(product);
  };

  const externalLink = `https://google.com/search?q=${product_name?.replaceAll(" ", "+")}`;
  const productCn = classNames("Product", {
    "Product--reserved": product_reserved,
  });
  const cartButtonCn = classNames("Product__Buttons-Reserve", {
    "Product__Buttons-Reserve--remove": productOnCart,
  });
  return (
    <div className={productCn} {...props}>
      <div className="Product__Image-Container">
        <img
          src={product_img}
          alt={`${product_name} - ${product_desc}`}
          width={250}
          height={200}
          loading="lazy"
          className="Product__Img"
        />

        {product_reserved && (
          <img
            src={reservedPlate.src}
            alt="plaquinha de reservado"
            className="Product__Reserved-Plate"
            loading="lazy"
          />
        )}
      </div>
      <div className="Product__Info">
        <h2 className="Product__Heading">{product_name}</h2>
        <p className="Product__Description">{product_desc}</p>

        <div className="Product__Buttons">
          <Link href={externalLink} passHref>
            <a target="_blank" className="Product__Buttons-External">
              Ver preço
            </a>
          </Link>
          <button className={cartButtonCn} onClick={reserveProduct} disabled={product_reserved}>
            {cartButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
