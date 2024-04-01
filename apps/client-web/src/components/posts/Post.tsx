import { Button, Paper, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PostTags } from "./PostTags";

export type PostProps = {
    id: string;
    title: string;
    body: string;
    postTags: string[];
};

export function Post({ title, body, postTags }: PostProps) {
    const navigate = useNavigate();
    return (
        <Paper
            sx={{
                padding: 5,
            }}
        >
            <Stack spacing={5}>
                <Typography variant="h5">{title}</Typography>
                <Typography>{body}</Typography>
                <PostTags postTags={postTags} />
                <Button
                    variant="contained"
                    onClick={() => navigate(-1)}
                    sx={{
                        alignSelf: "start",
                    }}
                >
                    Back
                </Button>
            </Stack>
        </Paper>
    );
}
