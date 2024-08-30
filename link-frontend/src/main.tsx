import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import theme from "./theme";
import {Provider} from "react-redux";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {store} from "./app/store";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
            <StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </StrictMode>
    </Provider>,
)
