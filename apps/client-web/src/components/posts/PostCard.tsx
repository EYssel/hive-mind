import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { PostProps } from "./Post";
import { PostTags } from "./PostTags";

export function PostCard({ id, title, body, postTags }: PostProps) {
    return (
        <>
            <Card variant="outlined">
                <CardActionArea href={`post/${id}`}>
                    <CardContent sx={{ minWidth: 275 }}>
                        <Typography
                            variant="h5"
                            color="text.secondary"
                        >
                            {title}
                        </Typography>
                        <Typography>{body}</Typography>
                        <PostTags postTags={postTags} />
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}
