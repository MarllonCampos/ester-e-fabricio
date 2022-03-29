import React from "react";
import { AllIconProps } from "./logo";

const CartIcon = ({ className }: AllIconProps) => {
  return (
    <span className={className}>
      <svg
        width="30"
        height="29"
        viewBox="0 0 30 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.9219 13.967L24.9737 4.93919C25.1218 4.28737 24.6263 3.66666 23.9579 3.66666H6.91007L6.51224 1.72178C6.41311 1.23702 5.98655 0.888885 5.49171 0.888885H1.04167C0.466363 0.888885 0 1.35525 0 1.93055V2.625C0 3.2003 0.466363 3.66666 1.04167 3.66666H4.07478L7.12374 18.5727C6.39431 18.9922 5.90278 19.7787 5.90278 20.6806C5.90278 22.0229 6.99097 23.1111 8.33333 23.1111C9.67569 23.1111 10.7639 22.0229 10.7639 20.6806C10.7639 20.0003 10.4841 19.3856 10.0337 18.9444H19.1329C18.6826 19.3856 18.4028 20.0003 18.4028 20.6806C18.4028 22.0229 19.491 23.1111 20.8333 23.1111C22.1757 23.1111 23.2639 22.0229 23.2639 20.6806C23.2639 19.7182 22.7045 18.8866 21.8933 18.4928L22.1327 17.4392C22.2809 16.7874 21.7854 16.1667 21.117 16.1667H9.46688L9.18281 14.7778H21.9061C22.3925 14.7778 22.8141 14.4412 22.9219 13.967Z"
          fill="white"
        />
      </svg>
    </span>
  );
};

export default CartIcon;
