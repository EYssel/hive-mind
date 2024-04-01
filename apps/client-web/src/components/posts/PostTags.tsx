import { Chip, Stack } from "@mui/material";

export function PostTags({ postTags }: { postTags: string[] }) {
    return (
        <>
            <Stack direction="row" margin={2} spacing={2}>
                {postTags.map((tag: string) => (
                    <Chip label={tag} />
                ))}
            </Stack>
        </>
    );
}
