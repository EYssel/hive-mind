import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PostTags } from "./PostTags";

export type PostProps = {
    id: string;
    title: string;
    body: string;
    postTags: string[];
};

export function Post({title, body, postTags}: PostProps) {
    const navigate = useNavigate();
    return (
        <>
            <Stack spacing={5}>
                <Button variant="contained" onClick={() => navigate(-1)} sx={{
                    alignSelf: "start"
                }}>
                    Back
                </Button>
                <Typography
                    variant="h5"
                >
                    {title}
                </Typography>
                <Typography>
                    {body}
                </Typography>
                <PostTags postTags={postTags}/>
            </Stack>
        </>
    )
}