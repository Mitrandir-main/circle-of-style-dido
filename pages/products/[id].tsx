import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
} from "@material-ui/core";
import { Product } from "../../types";

function ProductPage() {
    const router = useRouter();
    const { id } = router.query;

    const [product, setProduct] = useState<Product | undefined>(undefined);

    async function fetchProduct() {
        const response = await fetch("/api/products/" + id);
        const data = await response.json();
        setProduct(data);
        console.log(data);
    }

    useEffect(() => {
        if (id) {
            fetchProduct();
        }
    }, [id]);

    return (
        <Container>
            {product ? (
                <Card>
                    <CardContent>
                        <Typography>{product.name}</Typography>
                        <Typography>{product.description}</Typography>
                        <Typography>£ {product.price}</Typography>
                    </CardContent>
                </Card>
            ) : (
                <Grid>
                    <h3>Loading...</h3>
                </Grid>
            )}
        </Container>
    );
}

export default ProductPage;
