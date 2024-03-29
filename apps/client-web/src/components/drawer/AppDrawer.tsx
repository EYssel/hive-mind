import { Close, House, Menu, People } from "@mui/icons-material";
import { Drawer, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React from "react";

export function AppDrawer() {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Stack direction="row" spacing={4}>
                <Drawer variant="temporary" anchor="left" open={open}>
                    <Stack direction="column" spacing={4}>
                        <Stack direction="column" spacing={4}>
                            <IconButton href="/">
                                <House />
                            </IconButton>
                            <IconButton href="/posts">
                                <People />
                            </IconButton>
                        </Stack>
                        <Stack>
                            <IconButton onClick={() => setOpen(!open)}>
                                <Close />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Drawer>

                <IconButton onClick={() => setOpen(!open)}>
                    <Menu />
                </IconButton>
            </Stack>
        </>
    );
}
