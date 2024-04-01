import { Close, House, Menu, People } from "@mui/icons-material";
import { Drawer, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React from "react";

export function AppMenu() {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Drawer variant="temporary" anchor="left" open={open}>
                <Stack spacing={4} minWidth={"125px"} marginTop={5}>
                    <IconButton href="/">
                        <House />
                        <Typography>Home</Typography>
                    </IconButton>

                    <IconButton href="/posts">
                        <People />
                        <Typography>Posts</Typography>
                    </IconButton>

                    <IconButton onClick={() => setOpen(!open)}>
                        <Close />
                        <Typography>Close</Typography>
                    </IconButton>
                </Stack>
            </Drawer>
            <IconButton
                onClick={() => setOpen(!open)}
                sx={{
                    minWidth: 50,
                    minHeight: 50,
                    verticalAlign: "top",
                    textAlign: "left",
                    flex: "none",
                    marginRight: 5,
                }}
            >
                <Menu />
            </IconButton>
        </>
    );
}
