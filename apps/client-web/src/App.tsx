import { Stack, ThemeOptions, ThemeProvider, createTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { PostsRoute } from "./components";
import { AppDrawer } from "./components/drawer";
import { HomeRoute } from "./components/home";

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
            <Stack direction="row" spacing={4}>
                <AppDrawer />
                <Routes>
                    <Route path="/" element={<HomeRoute />} />
                    <Route path="/posts" element={<PostsRoute />} />
                </Routes>
            </Stack>
        </ThemeProvider>
    );
}

export default App;
