import {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import {AddShoppingCart, RemoveShoppingCart } from "@material-ui/icons";
import { Product } from "../types";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "1rem",
  },
  media: {
    height: 200,
  },
});

const ProductCard = ({
  product,
  addToCart,
  removeFromCart,
}: {
  product: Product;
  addToCart: any;
  removeFromCart: any;
}) => {
  const classes = useStyles();
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    setIsInCart(true);
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    setIsInCart(false);
    removeFromCart(product);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
          <Typography variant="h6" component="p">
            £ {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {isInCart ? (
          <Button
            startIcon={<RemoveShoppingCart />}
            onClick={handleRemoveFromCart}
          >
            Remove from Cart
          </Button>
        ) : (
          <Button startIcon={<AddShoppingCart />} onClick={handleAddToCart}>
            Add to Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
