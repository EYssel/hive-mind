import { HomeRoute, PostsRoute } from "../components";
import { PostRoute } from "../components/posts/PostRoute";

export const ROUTES: {path: string, element: JSX.Element}[] = [
    {
        path: "/",
        element: HomeRoute(),
    },
    {
        path: "/posts",
        element: PostsRoute(),
    },
    {
        path: "/post/:id",
        element: PostRoute(),
    }
]

