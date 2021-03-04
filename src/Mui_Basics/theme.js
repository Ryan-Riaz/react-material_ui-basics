import { green, indigo } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: {
            main: green[500],
        },
    },
});

export default theme;
