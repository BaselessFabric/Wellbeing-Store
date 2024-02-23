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

const pages = [];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
export const basket = new ShoppingBasket();

function ResponsiveAppBar(props) {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );
    const [isBasketOpen, setIsBasketOpen] = React.useState(false);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleBasketOpen = () => {
        setIsBasketOpen(true);
    };

    const handleBasketClose = () => {
        setIsBasketOpen(false);
    };

    // have to interact with a basket state, as opposed to the data in the basket object, or the basket wont be re-rendered
    // when item is removed
    const [basketItems, setBasketItems] = React.useState(basket.getItems());

    const handleRemoveFromBasket = (product) => {
        basket.removeProduct(product);
        setBasketItems([...basket.getItems()]);
    };

    const [totalItems, setTotalItems] = React.useState();

    // React.useEffect(() => {
    //     setTotalItems(basket.getTotalItemQuantity());
    // }, [basket]);

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Avatar
                        src={"images/logo.webp"}
                        alt="Logo"
                        sx={{
                            display: { xs: "none", md: "flex" },
                            marginRight: "1rem",
                        }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
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
                        {/* <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton> */}
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
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Avatar
                        src={"images/logo.webp"}
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
                        href="#app-bar-with-responsive-menu"
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
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    {/* <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/2.jpg"
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography textAlign="center">
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open basket">
                            <IconButton
                                onClick={handleBasketOpen}
                                sx={{ p: 0 }}
                            >
                                <Badge
                                    badgeContent={basket.getTotalItemQuantity()}
                                >
                                    <ShoppingBasketOutlinedIcon />
                                </Badge>
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Drawer
                        anchor="right"
                        color="blue"
                        open={isBasketOpen}
                        onClose={handleBasketClose}
                        // sx={{ backgroundColor: "secondary.main" }}
                    >
                        <Typography sx={{ p: 2 }}>
                            Shopping Basket Details
                            {basket.getItems().map((item, index) => (
                                <div>
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
                                </div>
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
