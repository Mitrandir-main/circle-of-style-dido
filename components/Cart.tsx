import {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Badge,
  Typography,
  Button,
  CardActions,
  Card,
} from "@material-ui/core";
import { ShoppingCart, CheckCircleRounded } from "@material-ui/icons";
import { Product } from "../types";

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  drawer: {
    flexShrink: 0,
  },
  badge: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}));

const Cart = ({
  cartItems = [],
  clearCart,
}: {
  cartItems: Product[];
  clearCart: () => void;
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (open: boolean | ((prevState: boolean) => boolean)) => event => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

      setOpen(open);
    };

  // maintain cart total
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const cartContent = (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Typography variant="h6" align="center">
        Cart
      </Typography>
      <List>
        {cartItems.map(item => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} secondary={`£ ${item.price}`} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography align="center">Total: £{total}</Typography>
      <Button
        fullWidth={true}
        startIcon={<CheckCircleRounded />}
        onClick={clearCart}
        variant="contained"
        color="secondary"
        type="submit"
      >
        Checkout
      </Button>
    </div>
  );

  return (
    <div>
      <IconButton className={classes.drawer} onClick={toggleDrawer(true)}>
        <Badge badgeContent={cartItems.length} classes={{badge: classes.badge}}>
          <ShoppingCart />
        </Badge>
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {cartContent}
      </Drawer>
    </div>
  );
};

export default Cart;
