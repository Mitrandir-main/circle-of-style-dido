import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@material-ui/core";
import { AddShoppingCart, RemoveShoppingCart } from "@material-ui/icons";
import { Product } from "../types";
import Link from "next/link";

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
    addToCart: any;
    removeFromCart: any;
}

const ProductCard = (props: Props) => {
    const classes = useStyles();
    const [isInCart, setIsInCart] = useState(false);

    const handleAddToCart = () => {
        setIsInCart(true);
        props.addToCart(props.product);
    };

    const handleRemoveFromCart = () => {
        setIsInCart(false);
        props.removeFromCart(props.product);
    };

    return (
        <Card className={classes.root}>
            <Link href={"/products/" + props.product.id}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.product.image}
                        title={props.product.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.product.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {props.product.description}
                        </Typography>
                        <Typography variant="h6" component="p">
                            £ {props.product.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                {isInCart ? (
                    <Button
                        startIcon={<RemoveShoppingCart />}
                        onClick={handleRemoveFromCart}
                    >
                        Remove from Cart
                    </Button>
                ) : (
                    <Button
                        startIcon={<AddShoppingCart />}
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default ProductCard;
