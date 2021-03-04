import CssBaseline from "@material-ui/core/CssBaseline";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootElm = document.getElementById("root");

ReactDOM.render(
    <StrictMode>
        <CssBaseline />
        <App />
    </StrictMode>,
    rootElm
);
