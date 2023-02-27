import {AppBar, Toolbar, Typography, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Link from "next/link";
import Cart from "./Cart";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "#f0c465",
    color: "#4a4a4a",
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    letterSpacing: "1px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  link: {
    marginLeft: theme.spacing(4),
    color: "#4a4a4a",
    fontWeight: "bold",
    letterSpacing: "1px",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Link href="/">
          <Typography variant="h6" className={classes.title}>
            shopt
          </Typography>
        </Link>
        <Link href="/" passHref>
          <Button className={classes.link}>Shop</Button>
        </Link>
        <Link href="/about" passHref>
          <Button className={classes.link}>About</Button>
        </Link>
        <Link href="/contact" passHref>
          <Button className={classes.link}>Contact</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
