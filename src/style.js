import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
    container: {
        background: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    btn: {
        marginTop: "40px",
    },
    icon: {
        marginRight: "10px",
    },
    cardGrid: {
        padding: "80px 0",
    },
    card: {
        display: "flex",
        height: "100%",
        flexDirection: "column",
    },
    cardMedia: {
        paddingTop: "56.25%",
    },
    cardContent: {
        flexGrow: "1",
    },
    footer: {
        background: theme.palette.background.paper,
        padding: "20px 0",
    },
}));

export default useStyle;
