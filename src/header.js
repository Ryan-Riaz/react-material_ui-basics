import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyle from "./style";

const Header = () => {
    const classes = useStyle();
    return (
        <AppBar position="relative">
            <Toolbar>
                <PhotoCamera className={classes.icon} />
                <Typography variant="h6">Photo Album</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
