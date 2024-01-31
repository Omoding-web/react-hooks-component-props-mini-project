import React from "react";
import Article from "./Article";

//Define the component to take in array of posts as aprop
function ArticleList({ posts = [] }) {
    return (
        // To map over the array of posts and rendering an Article component for each post
        <main>
            {posts.map((post) => (
                <Article key={post.id} {...post} />
            ))}
        </main>
    );
};

export default ArticleList;