import { Divider, Stack } from "@mui/material";
import { AppMenu } from "..";
import { AppBanner } from "../appBanner";

export function AppHeader() {
    return (
        <>
            <Stack direction={"row"} spacing={5}>
                <AppMenu />
                <AppBanner />
            </Stack>
            <Divider />
        </>
    );
}
