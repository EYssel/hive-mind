import { Stack, ThemeOptions, ThemeProvider, createTheme } from "@mui/material";
import { AppBody, AppHeader } from "./components";

export const themeOptions: ThemeOptions = {
    palette: {
        mode: "light",
        primary: {
            main: "#FFC300",
        },
        secondary: {
            main: "#008bf6",
        },
        background: {
            default: "#808080",
            paper: "#FFFFFF"
        }
    },
};
const theme = createTheme(themeOptions);

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={5} marginTop={5}>
                <AppHeader />
                <AppBody />
            </Stack>
        </ThemeProvider>
    );
}

export default App;
