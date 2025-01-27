import React, { useEffect } from "react";
import { Navbar } from "../components/Header";
import { Box, Typography, Container, } from "@mui/material";
import { theme } from "../components/theme";
import Typewriter from "typewriter-effect";

const Home: React.FC = () => {
    useEffect(() => {
        document.title = "Beginning";
    }, []);

    return (
        <Box sx={{
            width: '100%',
            minHeight: '100vh',
            overflowX: 'hidden',
            position: 'relative'
        }}>
            <Container
                maxWidth="xl"
                sx={{
                    px: {
                        xs: 2,
                        sm: 3,
                        md: 4,
                        lg: 6
                    },
                    minHeight: "100vh",
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                <Navbar />

                {/* About */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "1fr",
                            md: "1fr 1fr",
                            lg: "1.2fr 0.8fr"
                        },
                        flex: 1,
                        width: '100%',
                        gap: {
                            xs: 4, md: 6, lg: 8
                        },
                        alignItems: "center",
                        pt: { xs: 8, md: 10, lg: 12 },
                        pb: { xs: 4, md: 6, lg: 8 }
                    }}
                >

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            order: { xs: 1, md: 0 },
                            width: '100%',
                            maxWidth: { md: "90%", lg: "80%" },
                            mx: 'auto'
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                color: "white",
                                fontSize: {
                                    xs: '2.5rem',
                                    sm: '3rem',
                                    md: '4rem',
                                    lg: '5rem'
                                },
                                fontFamily: theme.typography.fontFamily,
                                lineHeight: { xs: 1.2, md: 1.3, lg: 1.4 },
                                mt: { xs: 2, md: 0 },
                                wordBreak: 'break-word'
                            }}
                        >
                            I'm Vyom
                            <Typewriter
                                options={{
                                    strings: ["Computers", "Cricket", "Muscles"],
                                    autoStart: true,
                                    loop: true,
                                    delay: 80,
                                }}
                            />
                        </Typography>

                        <Typography
                            variant="h2"
                            sx={{
                                color: "white",
                                fontSize: {
                                    xs: '1.5rem',
                                    sm: '1.75rem',
                                    md: '2rem',
                                    lg: '2.5rem'
                                },
                                fontFamily: theme.typography.fontFamily,
                                lineHeight: 1.3,
                                maxWidth: { md: "90%", lg: "100%" },
                                wordBreak: 'break-word'
                            }}
                        >
                            A sane Icarus who know not to fly too high
                        </Typography>
                    </Box>

                    {/* Image */}
                    <Box
                        sx={{
                            order: { xs: 0, md: 1 },
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative'
                        }}
                    >
                        <Box
                            component="img"
                            src="/Icarus.jpg"
                            alt="Profile"
                            sx={{
                                width: {
                                    xs: '100%',
                                    sm: '150%',
                                    md: '105%',
                                    lg: '200%'
                                },
                                maxWidth: '600px',
                                height: 'auto',
                                aspectRatio: '1 / 1',
                                objectFit: "cover",
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Home;