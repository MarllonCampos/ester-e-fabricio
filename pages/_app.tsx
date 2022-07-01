import type { AppProps } from "next/app";
import { CartProvider } from "../contexts/cart";
import "../styles/index.scss";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
