import React, { useEffect, useState } from "react";
import Posts from "./posts";
import Resources from "./resources";

export default function Homepage() {
    const [posts, setPosts] = useState([]);
    const [resources, setResources] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
        async function getPosts() {
            const response = await fetch(`http://localhost:5000/posts`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const posts = await response.json();
            setPosts(posts);
        }
        getPosts();
        return;
    }, [posts.length]);

    useEffect(() => {
        async function getResources() {
            const response = await fetch(`http://localhost:5000/resources`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const resources = await response.json();
            setResources(resources);
        }
        getResources();
        return;
    }, [resources.length]);

    return (
        <main>
            <div id="content">
                <div id="about">
                    <h2>About</h2>
                    I'm a web developer with a keen interest in sustainablity. This blog is a few titbits gleaned from my journey into green web design.
                </div>
                <div id="posts">
                    <h2>Posts</h2>
                    <Posts posts={posts} />
                </div>
            </div>
            <div id="resources">
                <h3>Useful links</h3>
                <Resources resources={resources} />
            </div>
        </main >
    )

}