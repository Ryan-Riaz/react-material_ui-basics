// import theme provider for providing myCustomTheme
import { ThemeProvider } from "@material-ui/core/styles";
import StylishComponent from "./makeStyle";
// import theme using my custom theme
import theme from "./theme";

const ThemeComp = () => {
    return (
        <ThemeProvider theme={theme}>
            <StylishComponent />
        </ThemeProvider>
    );
};

export default ThemeComp;
