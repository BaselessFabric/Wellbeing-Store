"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import Drawer from "@mui/material/Drawer";
import ShoppingBasketItem from "./ShoppingBasketItem";
import ShoppingBasket from "../modal/ShoppingBasketClass";
import Badge from "@mui/material/Badge";
import { useRouter } from "next/navigation";

// Create a new instance of ShoppingBasket
export const basket = new ShoppingBasket();

interface Props {
  basketContents: any;
  setBasketContents: any;
}

/**
 * Renders a responsive app bar component with a logo, navigation menu, and a shopping basket.
 *
 * @param props - The component props.
 * @returns The rendered `ResponsiveAppBar` component.
 */
function ResponsiveAppBar(props: Props) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [isBasketOpen, setIsBasketOpen] = React.useState(false);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleBasketOpen = () => {
    setIsBasketOpen(true);
  };

  const handleBasketClose = () => {
    setIsBasketOpen(false);
  };

  const router = useRouter();

  const navigateHome = () => {
    router.push(`/`);
  };

  const [basketItems, setBasketItems] = React.useState<any[]>(
    basket.getItems()
  );

  const handleRemoveFromBasket = (product: any) => {
    basket.removeProduct(product);
    setBasketItems([...basket.getItems()]);
  };

  const [totalItems, setTotalItems] = React.useState<any>();

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Avatar
            src={"/images/logo.webp"}
            alt="Logo"
            sx={{
              display: { xs: "none", md: "flex" },
              marginRight: "1rem",
            }}
          />
          {/* Title */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigateHome()}
            style={{ cursor: "pointer" }}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            WellNest
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            {/* Navigation Menu */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>
          <Avatar
            src={"/images/logo.webp"}
            alt="Logo"
            sx={{
              display: { xs: "flex", md: "none" },
              marginRight: "1rem",
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => navigateHome()}
            style={{ cursor: "pointer" }}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            WellNest
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          ></Box>
          <Box sx={{ flexGrow: 0 }}>
            {/* Shopping Basket */}
            <Tooltip title="Open basket">
              <IconButton onClick={handleBasketOpen} sx={{ p: 0 }}>
                <Badge badgeContent={basket.getTotalItemQuantity()}>
                  <ShoppingBasketOutlinedIcon />
                </Badge>
              </IconButton>
            </Tooltip>
          </Box>
          {/* Drawer for Shopping Basket */}
          <Drawer
            anchor="right"
            color="blue"
            open={isBasketOpen}
            onClose={handleBasketClose}
          >
            <Typography sx={{ p: 2 }}>
              Shopping Basket Details
              {/* Render each item in the basket */}
              {basket.getItems().map((item: any, index: number) => (
                <ShoppingBasketItem
                  key={index}
                  name={item.product.name}
                  image={item.product.image}
                  price={item.product.getPrice()}
                  quantity={item.quantity}
                  handleRemoveFromBasket={() =>
                    handleRemoveFromBasket(item.product)
                  }
                />
              ))}
            </Typography>
            <Typography sx={{ p: 2 }}>
              Total Price: {basket.getTotalPrice()}
            </Typography>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
