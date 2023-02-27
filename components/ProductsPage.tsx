import {useState, useEffect} from "react";
import {useRouter} from "next/router";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Product } from "../types";
import Cart from "./Cart";
import ProductCard from "./ProductCard";

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<any>("all");

  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    if (cart.find(item => item.id === product.id)) return;
    setCart([...cart, product]);
  };

  const removeFromCart = (product: Product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const categories = ["all", "clothing", "shoes", "accessories"];

  const router = useRouter();
  const {query} = router;

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    if (query.category) {
      setCategoryFilter(query.category);
    }
  }, [query]);

  function handleCategoryFilterChange(event: any) {
    setCategoryFilter(event.target.value);
    router.push(`/?category=${event.target.value}`);
  }

  const filteredProducts =
    categoryFilter === "all"
      ? products
      : products.filter(product => product.category === categoryFilter);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={9}>
            <Typography variant="h3" component="h1" gutterBottom>
              Products
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} container justify="flex-end">
            <Cart cartItems={cart} clearCart={clearCart} />
          </Grid>
        </Grid>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={categoryFilter}
            onChange={handleCategoryFilterChange}
            label="Category"
          >
            {categories.map(category => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Grid container spacing={2}>
          {filteredProducts.map(product => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <ProductCard
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default ProductsPage;
