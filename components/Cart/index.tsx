import classNames from "classnames";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart";
import { AllIconProps } from "../logo";
import Product from "../Product";

const CartIcon = ({ className }: AllIconProps) => {
  const { cartProducts } = useContext(CartContext);

  return (
    <Link href="/cart" passHref>
      <a className="cart">
        <svg
          width="33"
          height="36"
          viewBox="0 0 33 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.9219 20.9668L24.9737 11.939C25.1218 11.2872 24.6263 10.6664 23.9579 10.6664H6.91007L6.51224 8.72157C6.41311 8.23681 5.98655 7.88867 5.49171 7.88867H1.04167C0.466363 7.88867 0 8.35504 0 8.93034V9.62479C0 10.2001 0.466363 10.6664 1.04167 10.6664H4.07478L7.12374 25.5725C6.39431 25.992 5.90278 26.7785 5.90278 27.6804C5.90278 29.0227 6.99097 30.1109 8.33333 30.1109C9.67569 30.1109 10.7639 29.0227 10.7639 27.6804C10.7639 27.0001 10.4841 26.3854 10.0337 25.9442H19.1329C18.6826 26.3854 18.4028 27.0001 18.4028 27.6804C18.4028 29.0227 19.491 30.1109 20.8333 30.1109C22.1757 30.1109 23.2639 29.0227 23.2639 27.6804C23.2639 26.718 22.7045 25.8864 21.8933 25.4926L22.1327 24.439C22.2809 23.7872 21.7854 23.1665 21.117 23.1665H9.46688L9.18281 21.7776H21.9061C22.3925 21.7776 22.8141 21.441 22.9219 20.9668Z"
            fill="black"
          />
          <g>
            <circle cx="25.5" cy="7.5" r="7.5" fill="#AB786D" />
            <text y="13" x="20.7" fill="#fff">
              {cartProducts?.length}
            </text>
          </g>
        </svg>
      </a>
    </Link>
  );
};

export default CartIcon;
