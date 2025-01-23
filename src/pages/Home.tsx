import React, { useEffect } from "react";
import { Navbar } from "../components/Header";
import { Box, Typography, Container, useMediaQuery } from "@mui/material";
import { theme } from "../components/theme";
import Typewriter from "typewriter-effect";

const Home: React.FC = () => {
    useEffect(() => {
        document.title = "Beginning";
    }, []);

    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div>
            <Container disableGutters maxWidth={false} sx={{ minHeight: "100vh", width: "100%" }}>

                <Navbar />

                {/* About Section */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: isSmallScreen ? "1fr" : "1fr 1fr",
                        minHeight: "90vh",
                        gap: 4,
                        alignItems: "center",
                        pt: 8,
                    }}
                >
                    {/* Text Section */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            pl: { xs: 2, md: 8 },
                            order: isSmallScreen ? 1 : 0,
                        }}
                    >
                        <Typography
                            fontSize={isSmallScreen ? 35 : 100}
                            fontFamily={theme.typography.fontFamily}
                            sx={{
                                color: "white",
                                marginTop: isSmallScreen ? "5%" : "-20%",
                                marginLeft: isSmallScreen ? "" : "10%",
                                textAlign: isSmallScreen ? 'left' : '',
                                textWrap: 'wrap'
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
                            fontSize={isSmallScreen ? 25 : 30}
                            fontFamily={theme.typography.fontFamily}
                            sx={{
                                color: "white",
                                marginTop: isSmallScreen ? "-5%" : "-2%",
                                marginLeft: isSmallScreen ? "" : "10%",
                                textAlign: isSmallScreen ? 'left' : '',
                                textWrap: 'wrap'
                            }}
                        >
                            A sane Icarus who know not to fly too high
                        </Typography>

                    </Box>

                    

                    {/* Image Section */}
                    <Box
                        sx={{
                            display: "block",
                            justifyContent: isSmallScreen ? "center" : "flex-end",
                            alignItems: "center",
                            flexDirection: isSmallScreen ? "column" : "row",
                            order: isSmallScreen ? 0 : 1,
                            width: "90%",
                            height: "auto",
                            margin: isSmallScreen ? "20px auto 0" : "auto",
                            maxWidth: "100%",
                        }}
                    >
                        <Box
                            component="img"
                            src="/Icarus.jpg"
                            alt="Profile"
                            sx={{
                                width: isSmallScreen ? "100%" : "100%",
                                height: isSmallScreen ? '100%' : 'auto',
                                aspectRatio: isSmallScreen ? 'auto' : '6 / 6',
                                alignItems: "center",
                                marginBottom: isSmallScreen ? '-10%' : '-2%',
                                marginLeft: isSmallScreen ? '0' : '60%',
                                objectFit: "cover",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default Home;
