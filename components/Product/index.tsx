/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart";

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

  const cartButtonCn = classNames("Product__Buttons-Reserve", {
    "Product__Buttons-Reserve--remove": productOnCart,
  });
  return (
    <div className="Product" {...props}>
      <img
        src={
          product_img ||
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRDi-n1KjIOjv4A7SLtwVWPD9pI8AljxZ7pSEmnuX3bGsn3eB7iBu6Vg0nYRLAmB1uBdALMIq2W8UW-9V83MCqV_-djVFOqTrsELB3OruNmT50STpmYT-Y_"
        }
        alt="Imagem representativa"
        width={250}
        height={200}
      />
      <div className="Product__Info">
        <h2 className="Product__Heading">{product_name}</h2>
        <p className="Product__Description">{product_desc}</p>

        <div className="Product__Buttons">
          <a className="Product__Buttons-External">
            <Link href={externalLink}>
              <a target="_blank">Ver preço</a>
            </Link>
          </a>
          <button className={cartButtonCn} onClick={reserveProduct}>
            {cartButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
