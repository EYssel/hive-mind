import { Close, House, Menu, People } from "@mui/icons-material";
import { Drawer, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React from "react";

export function AppMenu() {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Drawer variant="temporary" anchor="left" open={open}>
                <Stack direction="column" spacing={4} minWidth={"75px"}>
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
