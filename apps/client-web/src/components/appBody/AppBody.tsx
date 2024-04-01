import { Route, Routes } from "react-router-dom";
import { HomeRoute, PostsRoute } from "..";
import { PostRoute } from "../posts/PostRoute";

export function AppBody() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomeRoute />} />
                <Route path="/posts" element={<PostsRoute />} />{" "}
                <Route path="/post/:id" element={<PostRoute />} />
            </Routes>
        </>
    );
}
