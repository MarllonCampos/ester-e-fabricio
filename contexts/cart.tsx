import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import Product, { ProductInterface } from "../components/Product";

export const CartContext = createContext({} as CartContext);
type CartContext = {
  toggleProductOnCart: (product: ProductInterface) => void;
  cartProducts: Array<ProductInterface> | undefined;
  setCartProducts: Dispatch<SetStateAction<ProductInterface[] | []>>;
};
type CartProvider = {
  children: ReactNode;
};

export function CartProvider(props: any) {
  const [cartProducts, setCartProducts] = useState<Array<ProductInterface> | []>([]);
  const toggleProductOnCart = (product: ProductInterface) => {
    if (!cartProducts) {
      setCartProducts([product]);
      return;
    }
    const index = cartProducts.findIndex(
      (cartProduct) => cartProduct.product_id === product.product_id
    );
    const isNewProduct = index < 0;
    const newProducts = isNewProduct
      ? [...cartProducts, product]
      : cartProducts.filter(({ product_id }) => product_id !== product.product_id);
    setCartProducts(newProducts);
  };
  return (
    <CartContext.Provider value={{ toggleProductOnCart, cartProducts, setCartProducts }}>
      {props.children}
    </CartContext.Provider>
  );
}
