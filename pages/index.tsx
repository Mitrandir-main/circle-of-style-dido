import React from "react";
import {Product} from "../types";
import {
  Container,
} from "@material-ui/core";
import ProductsPage from "../components/ProductsPage";

interface HomePageProps {
  products: Product[];
}

const HomePage: React.FC<HomePageProps> = ({products}) => {
  return (
    <Container maxWidth="md">
      <ProductsPage />
    </Container>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

export default HomePage;
