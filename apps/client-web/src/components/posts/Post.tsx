import { Stack, Typography } from "@mui/material";
import { PostTags } from "./PostTags";

export type PostProps = {
    id: string;
    title: string;
    body: string;
    postTags: string[];
};

export function Post({title, body, postTags}: PostProps) {
    return (
        <>
            <Stack>
                <Typography>
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