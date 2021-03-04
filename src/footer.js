import { Typography } from "@material-ui/core";
import React from "react";
import useStyle from "./style";

const Footer = () => {
    const classes = useStyle();
    return (
        <footer classes={classes.footer}>
            <Typography variant="h3" align="center" gutterBottom>
                Ryan Riaz's Album
            </Typography>
            <Typography align="center" paragraph>
                &copy; All rights reserved 2021
            </Typography>
        </footer>
    );
};

export default Footer;
