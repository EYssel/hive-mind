import { Box, Typography } from "@mui/material";
import logo from "../../logo.png";

export function AppBanner() {
    return (
        <>
            <Box>
                <img src={logo} alt="Hive Mind Logo"/>
            </Box>
            <Typography
                fontSize={30}
                alignItems={"flex-end"}
                // sx={{
                //     alignItems: "center", justifyContent: "space-between", verticalAlign: "middle"
                // }}
            >
                Hive Mind Wiki
            </Typography>
        </>
    );
}
