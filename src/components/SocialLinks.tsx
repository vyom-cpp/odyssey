import { IconButton } from "@mui/material";
import React from "react"
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useCustomNavigate } from "../utils/useCustomNavigate";


interface SocialLinkProps {
    color: string | undefined;
    fontSize: string | number;
}
export const SocialLinks: React.FC<SocialLinkProps> = ({ fontSize }) => {
    const handleNavigate = useCustomNavigate();
    return (
        <div>
            <IconButton onClick={() => handleNavigate('https://github.com/vyom-cpp')}>
                <GitHubIcon style={{ color: 'white', fontSize: fontSize }} />
            </IconButton>
            <IconButton onClick={() => handleNavigate('https://www.linkedin.com/in/vyom-sutariya-665828263/')}>
                <LinkedInIcon style={{ color: 'white', fontSize: fontSize }} />
            </IconButton>
            <IconButton onClick={() => handleNavigate('https://x.com/vyom_sutariya')}>
                <XIcon style={{ color: 'white', fontSize: fontSize }} />
            </IconButton>
            <IconButton onClick={() => handleNavigate('https://www.instagram.com/vyom._14/')}>
                <InstagramIcon style={{ color: 'white', fontSize: fontSize }} />
            </IconButton>
        </div>
    )
}