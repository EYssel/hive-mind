import { Close, House, Menu, People } from "@mui/icons-material";
import { Drawer, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React from "react";

export function AppMenu() {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Drawer variant="temporary" anchor="left" open={open}>
                <Stack direction="column" spacing={4} minWidth={75}>
                    <Stack direction="column" spacing={4}>
                        <IconButton href="/">
                            <House />
                        </IconButton>
                        <IconButton href="/posts">
                            <People />
                        </IconButton>
                        <IconButton onClick={() => setOpen(!open)}>
                            <Close />
                        </IconButton>
                    </Stack>
                </Stack>
            </Drawer>
            <div className="vertical-align:top align:left">
                <IconButton onClick={() => setOpen(!open)}>
                    <Menu />
                </IconButton>
            </div>
        </>
    );
}
