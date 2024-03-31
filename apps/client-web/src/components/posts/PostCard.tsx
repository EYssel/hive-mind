import { Card, CardContent, Typography } from "@mui/material";
import { PostProps } from "./Post";
import { PostTags } from "./PostTags";


export function PostCard({ title, body, postTags }: PostProps) {
    return (
        <>
            <Card variant="outlined">
                <CardContent sx={{ minWidth: 275 }}>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        {title}
                    </Typography>
                    <Typography component="div">{body}</Typography>
                    <PostTags postTags={postTags}/>
                </CardContent>
            </Card>
        </>
    );
}
