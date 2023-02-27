import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
} from "@material-ui/core";
import { Product, Review } from "../../types";
import ProductPageComponent from "@/components/ProductPage";
import { reviews } from "../api/data";

function ProductPage() {
    const router = useRouter();
    const { id } = router.query;

    const [product, setProduct] = useState<Product | undefined>(undefined);
    const [productReviews, setProductReviews] = useState<Review[]>([]);

    async function fetchProduct() {
        const response = await fetch("/api/products/" + id);
        const data = await response.json();
        setProduct(data);
    }
    async function fetchProductReviews() {
        const response = await fetch("/api/reviews/" + id);
        const data = await response.json();
        setProductReviews(data);
    }

    useEffect(() => {
        if (id) {
            fetchProduct();
            fetchProductReviews();
        }
    }, [id]);

    return (
        <Container maxWidth="lg">
            {product ? (
                <ProductPageComponent product={product} reviews={reviews} />
            ) : (
                <Grid>
                    <h3>Loading...</h3>
                </Grid>
            )}
        </Container>
    );
}

export default ProductPage;
