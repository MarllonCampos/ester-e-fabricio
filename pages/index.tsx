import type { NextPage } from "next";

import Header from "../components/Header";
import Product, { ProductInterface } from "../components/Product";

const productMock: ProductInterface[] = [
  {
    image:
      "https://images.kabum.com.br/produtos/fotos/254196/notebook-lenovo-ideapad-3i-intel-celeron-n4020-dual-core-4gb-hd-500gb-linux-15-6-prata-82bus00000_1636571138_gg.jpg",
    description: "Ajude-me a montar minha casa",
    productId: "4basd-a3df1-ad31e-143fc",
    externalLink:
      "https://www.kabum.com.br/produto/254196/notebook-lenovo-ideapad-3i-intel-celeron-n4020-dual-core-4gb-hd-500gb-linux-15-6-prata-82bus00000",
    title: "Notebook Lenovo",
  },
  {
    image:
      "https://images.kabum.com.br/produtos/fotos/254196/notebook-lenovo-ideapad-3i-intel-celeron-n4020-dual-core-4gb-hd-500gb-linux-15-6-prata-82bus00000_1636571138_gg.jpg",
    description: "Ajude-me a montar minha casa",
    productId: "4basd-a3df1-ad31e-143fc",
    externalLink:
      "https://www.kabum.com.br/produto/254196/notebook-lenovo-ideapad-3i-intel-celeron-n4020-dual-core-4gb-hd-500gb-linux-15-6-prata-82bus00000",
    title: "Notebook Lenovo",
  },
  {
    image:
      "https://images.kabum.com.br/produtos/fotos/254196/notebook-lenovo-ideapad-3i-intel-celeron-n4020-dual-core-4gb-hd-500gb-linux-15-6-prata-82bus00000_1636571138_gg.jpg",
    description: "Ajude-me a montar minha casa",
    productId: "4basd-a3df1-ad31e-143fc",
    externalLink:
      "https://www.kabum.com.br/produto/254196/notebook-lenovo-ideapad-3i-intel-celeron-n4020-dual-core-4gb-hd-500gb-linux-15-6-prata-82bus00000",
    title: "Notebook Lenovo",
  },
  {
    image:
      "https://images.kabum.com.br/produtos/fotos/254196/notebook-lenovo-ideapad-3i-intel-celeron-n4020-dual-core-4gb-hd-500gb-linux-15-6-prata-82bus00000_1636571138_gg.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ullam sit quae amet corporis totam asperiores! Repellendus voluptate odit maiores vitae corporis, in expedita dolorum nesciunt nulla itaque obcaecati illo  nulla itaque obcaecati illo  nulla itaque obcaecati illo  nulla itaque obcaecati illo.",
    productId: "4basd-a3df1-ad31e-143fc",
    externalLink:
      "https://www.kabum.com.br/produto/254196/notebook-lenovo-ideapad-3i-intel-celeron-n4020-dual-core-4gb-hd-500gb-linux-15-6-prata-82bus00000",
    title: "Notebook Lenovo",
  },
  {
    image:
      "https://images.kabum.com.br/produtos/fotos/254196/notebook-lenovo-ideapad-3i-intel-celeron-n4020-dual-core-4gb-hd-500gb-linux-15-6-prata-82bus00000_1636571138_gg.jpg",
    description: "Ajude-me a montar minha casa",
    productId: "4basd-a3df1-ad31e-143fc",
    externalLink:
      "https://www.kabum.com.br/produto/254196/notebook-lenovo-ideapad-3i-intel-celeron-n4020-dual-core-4gb-hd-500gb-linux-15-6-prata-82bus00000",
    title: "Notebook Lenovo",
  },
];

const Home: NextPage = () => {
  return (
    <main>
      <Header />
      <div className="Products-container">
        {productMock.map(({ productId, ...product }) => (
          <Product {...product} productId={productId} key={productId} />
        ))}
      </div>
    </main>
  );
};

export default Home;
