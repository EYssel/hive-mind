import { Paper, Typography } from "@mui/material";

export function HomeRoute() {
    return (
        <Paper
            sx={{
                padding: 10,
                textAlign: "center",
            }}
        >
            <img src="logo.png" width={150} className="align-items:center" />
            <Typography>Welcome to Hive Mind Wiki!</Typography>
        </Paper>
    );
}
