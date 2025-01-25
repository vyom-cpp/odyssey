// Small Screen nu karvanu baki che haju aama
import React, { useEffect } from "react";
import { Navbar } from "../components/Header";
import { Container, Box, Typography, useMediaQuery } from "@mui/material";
import { theme } from "../components/theme";

const About: React.FC = () => {
    useEffect(() => {
        document.title = "Beginning";
    }, []);

    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div>
            <Container disableGutters maxWidth={false} sx={{ minHeight: "100vh", width: "100%" }}>

                <Navbar />

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: isSmallScreen ? "column" : "row",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 4,
                    }}
                >
                    <Box
                        sx={{
                            minWidth: isSmallScreen ? '' : '1000px',


                        }}
                    >
                        <Typography
                            fontSize={isSmallScreen ? 35 : 65}
                            fontFamily={theme.typography.fontFamily}
                            gutterBottom
                            sx={{
                                marginTop: isSmallScreen ? '' : '12%',
                                marginLeft: isSmallScreen ? '' : '22%'
                            }}
                        >
                            About Me
                        </Typography>
                        <hr
                            style={{
                                marginTop: isSmallScreen ? '' : '-2%',
                                marginLeft: isSmallScreen ? '' : '22%'
                            }}
                        />
                        <Typography
                            fontSize={isSmallScreen ? 35 : 25}
                            fontFamily={theme.typography.fontFamily}
                            sx={{
                                // textAlign: 'center',
                                marginTop: isSmallScreen ? '' : '5%',
                                marginLeft: isSmallScreen ? '' : '22%'

                            }}
                        >
                            Hi, my name is Vyom<br />
                            I'm the one who thinks with logic's grace,<br />
                            A novice on life's vast and varied stage.<br />
                            I'm pursuing Computer Science but<br />
                            Apart from the subjects that my course offers,<br />
                            I'm also interested in big questions of life like,<br />
                            What is the purpose of my life?
                        </Typography>
                    </Box>
                </Box>

            </Container>

        </div>
    );
};

export default About;