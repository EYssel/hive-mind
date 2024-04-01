import { useParams } from "react-router";
import { Post } from ".";
import { POSTS } from "./POST_DATA";

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
        <Post
            id={post.id}
            title={post.title}
            body={post.body}
            postTags={post.postTags}
        />
    );
}
