import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
} from "@material-ui/core";
import React from "react";
import useStyle from "./style";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Cards = () => {
    const classes = useStyle();
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <Grid item xs={12} sm={6} md={4} key={card}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                alt="Contemplative Reptile"
                                image="https://source.unsplash.com/random"
                                title="Contemplative Reptile"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                >
                                    Lizard
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    Lizards are a widespread group of squamate
                                    reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="small" color="primary">
                                    view
                                </Button>
                                <Button size="small" color="primary">
                                    Edit
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Cards;
