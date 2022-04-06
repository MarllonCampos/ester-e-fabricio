import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface ProductInterface extends React.HTMLProps<HTMLDivElement> {
  image: string;
  productId: string;
  description: string;
  externalLink: string;
  title: string;
}
const Product = ({
  image,
  title,
  description,
  externalLink,
  productId,
  ...props
}: ProductInterface) => {
  const reserveProduct = () => {
    console.log(productId);
  };

  return (
    <div className="Product" {...props}>
      <Image src={image} alt="Imagem representativa" width={250} height={200} />
      <div className="Product__Info">
        <h2 className="Product__Heading">{title}</h2>
        <p className="Product__Description">{description}</p>

        <div className="Product__Buttons">
          <a className="Product__Buttons-External">
            <Link href={externalLink}>Ver preço</Link>
          </a>
          <button className="Product__Buttons-Reserve" onClick={reserveProduct}>
            Reservar Já
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
