import { Stack } from "@mui/material";
import { AppMenu } from "..";
import { AppBanner } from "../appBanner/AppBanner";

export function AppHeader() {
    return (
        <>
            <Stack direction={"row"}>
                <AppMenu />
                <AppBanner />
            </Stack>
        </>
    )
}