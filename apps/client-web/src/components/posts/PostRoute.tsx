import { Stack, Typography } from "@mui/material";
import { useParams } from "react-router";
import { POSTS } from "./POST_DATA";
import { PostTags } from "./PostTags";

function getPost(id: string) {
    return POSTS.find((item) => item.id === id);
}

export function PostRoute() {
    const { id } = useParams();
    if (!id) {
        return <>Post Not Found</>;
    }

    const post = getPost(id);

    if (!post) {
        return <>Post Not Found</>;
    }

    return (
        <>
            <Stack>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {post.title}
                </Typography>
                <Typography>{post.body}</Typography>
                <PostTags postTags={post.postTags} />
            </Stack>
        </>
    );
}
