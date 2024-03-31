import { Stack } from "@mui/material";
import { PostCard } from "./PostCard";

const POSTS = [
    {
        title: "test",
        body: "test test",
        postTags: ["TypeScript", "React"],
    },
    {
        title: "test",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quidem doloremque molestias assumenda facere magni sint tempora ratione cupiditate velit dolorum iure odio, nostrum a nam, officiis voluptas reprehenderit aspernatur.",
        postTags: ["Node.js", "AWS"],
    },
];

export function PostsRoute() {
    return (
        <>
            <Stack spacing={5}>
                {POSTS.map(
                    (post: {
                        title: string;
                        body: string;
                        postTags: string[];
                    }) => (
                        <PostCard
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
