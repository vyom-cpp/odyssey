// Gallery Page
import React, { useEffect } from "react";
import { Navbar } from "../components/Header";
import { Container } from "@mui/material";

const Gallery: React.FC = () => {
    useEffect(() => {
        document.title = "Beginning";
    }, []);

    // const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div>
            <Container disableGutters maxWidth={false} sx={{ minHeight: "100vh", width: "100%" }}>

                <Navbar />

            </Container>

        </div>
    );
};

export default Gallery;