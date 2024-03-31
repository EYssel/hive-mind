import { Chip, Stack } from "@mui/material";

export function PostTags({ postTags }: { postTags: string[] }) {
    return (
        <>
            <Stack direction="row">
                {postTags.map((tag: string) => (
                    <Chip label={tag} />
                ))}
            </Stack>
        </>
    );
}
