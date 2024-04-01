import { Paper, Typography } from "@mui/material";
import logo from "../../logo512.png";

export function HomeRoute() {
    return (
        <Paper
            sx={{
                padding: 10,
                textAlign: "center",
            }}
        >
            <img src={logo} width={250} className="align-items:center" alt="Hive Mind Logo"/>
            <Typography>Welcome to Hive Mind Wiki!</Typography>
        </Paper>
    );
}
