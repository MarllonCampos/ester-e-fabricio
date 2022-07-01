import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import Product, { ProductInterface } from "../components/Product";
import { api } from "../services/api.config";

interface Products {
  product_id: string;
  product_name: string;
  product_desc: string;
  product_img: string;
  product_reserved: boolean;
  client_name: string;
  client_email: string;
}
const Home: NextPage = () => {
  const [products, setProducts] = useState<Array<Products>>([]);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => res.data)
      .then((res) => {
        setProducts(res);
      });
  }, []);
  return (
    <main>
      <Header />
      <div className="Products-container">
        {products.map(({ product_id, ...product }) => (
          <Product {...product} product_id={product_id} key={product_id} id={product_id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
