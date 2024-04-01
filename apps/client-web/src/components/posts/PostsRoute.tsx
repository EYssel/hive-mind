import { Stack } from "@mui/material";
import { POSTS } from "./POST_DATA";
import { PostCard } from "./PostCard";



export function PostsRoute() {
    return (
        <>
            <Stack spacing={5}>
                {POSTS.map(
                    (post: {
                        id: string;
                        title: string;
                        body: string;
                        postTags: string[];
                    }) => (
                        <PostCard
                            id={post.id}
                            title={post.title}
                            body={post.body}
                            postTags={post.postTags}
                        />
                    )
                )}
            </Stack>
        </>
    );
}
