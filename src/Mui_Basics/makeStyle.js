// import component which I need
import { Button, Typography } from "@material-ui/core";
// import makeStyles for customizing my styles
import { makeStyles } from "@material-ui/core/styles";

// make my own style for the component
const useStyles = makeStyles({
    container: {
        maxWidth: "80%",
        margin: "20px auto",
    },
    myColor: {
        color: "red",
        fontSize: "25px",
    },
});

const StylishComponent = () => {
    // use the style
    const classes = useStyles();
    return (
        // use the className what I wanna use
        <div className={classes.container}>
            <Typography className={classes.myColor} variant="h1">
                Hello World
            </Typography>

            <Button variant="outlined" color="primary">
                My Button
            </Button>
            <Typography variant="h3">Hello! I'm Heading!</Typography>
        </div>
    );
};

export default StylishComponent;
