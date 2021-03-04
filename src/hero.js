import { Button, Container, Grid, Typography } from "@material-ui/core";
import useStyle from "./style";

const Hero = () => {
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <Container maxWidth="sm">
                <Typography
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    Photo Album
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="textPrimary"
                    paragraph
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                    corporis ipsam, dicta aliquid maxime facere Lorem ipsum
                    dolor sit amet consectetur.
                </Typography>
                <div className={classes.btn}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary">
                                See my Photos
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Download
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default Hero;
