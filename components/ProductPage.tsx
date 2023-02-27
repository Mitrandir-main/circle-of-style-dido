import { Product, Review } from "@/types";
import {
    Button,
    CardActions,
    CardMedia,
    Divider,
    Grid,
    ListItem,
    Typography,
    makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import Cart from "./Cart";
import { AddShoppingCart, RemoveShoppingCart } from "@material-ui/icons";
import moment from "moment";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: "1rem",
    },
    media: {
        height: 200,
    },
});

interface Props {
    product: Product;
    reviews: Review[];
}
export default function ProductPageComponent(props: Props) {
    const classes = useStyles();
    const [cart, setCart] = useState<Product[]>([]);

    const [isInCart, setIsInCart] = useState(false);

    const addToCart = () => {
        if (cart.find((item) => item.id === props.product.id)) return;
        setCart([...cart, props.product]);
        setIsInCart(true);
    };

    const removeFromCart = () => {
        setCart(cart.filter((item) => item.id !== props.product.id));
        setIsInCart(false);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <div>
            <Grid item xs={12} sm={3} container>
                <Cart cartItems={cart} clearCart={clearCart} />
            </Grid>

            <Typography gutterBottom variant="h5" component="h2">
                {props.product.name}
            </Typography>
            <CardMedia
                className={classes.media}
                image={props.product.image}
                title={props.product.name}
            />
            <Typography variant="body2" color="textSecondary" component="p">
                {props.product.description}
            </Typography>
            <Typography variant="h6" component="p">
                Category: {props.product.category}
            </Typography>

            <Typography variant="h6" component="p">
                £ {props.product.price}
            </Typography>
            {props.product.images &&
                props.product.images.map((x, index) => {
                    return (
                        <CardMedia
                            key={index}
                            className={classes.media}
                            image={x}
                            title={props.product.name + "image_" + index}
                        />
                    );
                })}
            <CardActions>
                {isInCart ? (
                    <Button
                        startIcon={<RemoveShoppingCart />}
                        onClick={() => {
                            removeFromCart();
                        }}
                    >
                        Remove from Cart
                    </Button>
                ) : (
                    <Button
                        startIcon={<AddShoppingCart />}
                        onClick={() => {
                            addToCart();
                        }}
                    >
                        Add to Cart
                    </Button>
                )}
            </CardActions>
            <Typography variant="h6" component="p">
                Reviews:
            </Typography>

            {props.reviews.map((x) => {
                return (
                    <ListItem key={x.id}>
                        <Grid container spacing={1}>
                            <Grid item xs={10}>
                                <Typography variant="h6">{x.name}</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="subtitle2">
                                    {moment(x.createdAt).fromNow()}
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                {x.rating}⭐
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    {x.comment}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider />
                    </ListItem>
                );
            })}
        </div>
    );
}
