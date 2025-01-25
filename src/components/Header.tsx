import * as React from "react";
import { useState } from "react";
import {
    Box,
    Button,
    Container,
    Drawer,
    Grid,
    IconButton,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { Link } from "@mui/joy";
// import { motion } from "framer-motion";
import { useCustomNavigate } from "../utils/useCustomNavigate";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import { SocialLinks } from "./SocialLinks";
import { theme } from "./theme";
import "@fontsource/barlow-condensed/400.css";

const pages = [
    {
        name: "ABOUT",
        route: "/about",
    },
    {
        name: "PROJECTS",
        route: "/projects",
    },
    {
        name: "GALLERY",
        route: "/gallery",
    },
    {
        name: "CONTACT",
        route: "contact",
    }
];

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};

export const Navbar: React.FC = () => {
    const isMobile = useMediaQuery('(max-width:900px)');

    return (
        <Container
            maxWidth={false}
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: 'transparent',
                zIndex: 1000,
                marginTop: isMobile
                    ? "none"
                    : "0.1%",
                padding: "1rem",
            }}
        >
            {isMobile ? <NavbarSm /> : <NavbarXl />}
        </Container>
    );
};

const handleUnderline = (page: string) => {
    if (document.location.pathname.toString().includes(page.toString().toLowerCase())) {
        return "underline";
    }
    return "none";
};

const NavbarXl = () => {
    const handleNavigate = useCustomNavigate();

    const handleClick = (route: string) => {
        if (route.startsWith('/')) {
            handleNavigate(route);
        } else {
            scrollToSection(route);
        }
    };

    return (
        <>
            <Grid
                container
                direction="row"
                alignItems="center"
                spacing={1}
                justifyContent="left"
                marginTop={0}
                sx={{
                    mb: 8,
                    ml: -2,
                }}
            >
                {pages.map((page, key) => (
                    <Grid item key={key}>
                        <Button onClick={() => handleClick(page.route)}>
                            <Link
                                fontSize={18}
                                fontWeight={150}
                                fontFamily={'Barlow Condensed'}
                                underline="hover"
                                sx={{
                                    color: "white",
                                    textDecoration: page.route.startsWith('/') ? handleUnderline(page.route) : "none",
                                    textDecorationThickness: "2px",
                                    textDecorationStyle: "solid",
                                    textUnderlineOffset: "5px",

                                }}
                            >
                                {page.name}
                            </Link>
                        </Button>
                    </Grid>
                ))}
            </Grid>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    width: "100%",
                    marginTop: '-70px',
                    maxWidth: "fit-content",
                }}
            >
                <SocialLinks color="black" fontSize="none" />
            </Box>
        </>
    );
};

const NavbarSm: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleNavigate = useCustomNavigate();

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
                (event as React.KeyboardEvent).key === "Shift")
        ) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleClick = (route: string) => {
        if (route.startsWith('/')) {
            handleNavigate(route);
        } else {
            scrollToSection(route);
        }
        setDrawerOpen(false);
    };

    return (
        <>
            <Grid
                container
                display="flex"
                direction="row"
                justifyContent="space-between"
                width="100%"
            >
                <Grid item marginLeft={-3}>
                    <Box
                        height={70}
                        width={70}
                        minHeight={80}
                        minWidth={80}
                        mt={2.5}
                        ml={2}
                        alignContent="center"
                        onClick={() => handleNavigate("/home")}
                        sx={{ cursor: "pointer" }}
                    >

                        {/* Kaik lakjhe ahiya lodu */}

                    </Box>
                </Grid>
                <Grid item>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            width: "100%",
                            marginTop: 2.3,
                        }}
                    >
                        <IconButton
                            edge="start"
                            aria-label="menu"
                            onClick={toggleDrawer(!drawerOpen)}
                            sx={{ height: 40, width: 40, mt: 2 }}
                        >
                            <DragHandleIcon
                                style={{
                                    fontSize: "45",
                                    color: 'whitesmoke',
                                    marginTop: "-40px"
                                }}
                            />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>

            <Drawer
                anchor="top"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                    "& .MuiDrawer-paper": {
                        overflow: "hidden",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        width: "100%",
                        marginTop: 2.8,
                        marginLeft: -2.8,
                    }}
                >
                    <IconButton onClick={toggleDrawer(false)}>
                        <CloseIcon
                            sx={{
                                fontSize: "38px",
                                color: theme.palette.primary.dark
                            }}
                        />
                    </IconButton>
                </Box>
                <Container
                    sx={{
                        width: "100%",
                        height: "100vh",
                        display: "flex",
                        direction: "column",
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}
                >
                    <Stack>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            style={{ height: "75%" }}
                            spacing={2}
                            marginTop={15}
                        >
                            {pages.map((page, key) => (
                                <Grid item key={key}>
                                    <Typography
                                        variant="h4"
                                        onClick={() => handleClick(page.route)}
                                        sx={{
                                            textDecoration: page.route.startsWith('/') ? handleUnderline(page.route) : "none",
                                            textDecorationThickness: "2px",
                                            textDecorationStyle: "solid",
                                            textUnderlineOffset: "5px",
                                        }}
                                    >
                                        {page.name}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            width="100%"
                            marginTop={20}
                            style={{ position: "relative" }}
                        >
                            <SocialLinks color="white" fontSize="none" />
                        </Box>
                    </Stack>
                </Container>
            </Drawer>
        </>
    );
};