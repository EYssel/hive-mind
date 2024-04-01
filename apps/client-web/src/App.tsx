import { Stack, ThemeOptions, ThemeProvider, createTheme } from "@mui/material";
import { AppBody, AppHeader } from "./components";

export const themeOptions: ThemeOptions = {
    palette: {
        mode: "light",
        primary: {
            main: "#f38841",
        },
        secondary: {
            main: "#008bf6",
        },
    },
};
const theme = createTheme(themeOptions);

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={5}>
                <AppHeader />
                <AppBody />
            </Stack>
        </ThemeProvider>
    );
}

export default App;
