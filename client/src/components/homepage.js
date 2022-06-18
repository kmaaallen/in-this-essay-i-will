import React, { useEffect, useState } from "react";
import Posts from "./posts";
import ThemeButton from './themeButton';

export default function Homepage() {
    const [posts, setPosts] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
        async function getPosts() {
            const response = await fetch(`http://localhost:5000/`);

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

    return (
        <div>
            <main>
                <div id="content">
                    <div id="about">
                        <h2>About</h2>
                        I'm a budding web developer with a keen interest in sustainable web
                        design. I've long been an advocate for reducing waste at home and
                        shopping sustainably but only recently have I considered how web
                        design could negatively impact the environment. This blog will contain
                        a few titbits on sustainable design and development as they grab my
                        interest.
                    </div>
                    <div id="posts">
                        <h2>Posts</h2>
                        <Posts posts={posts} />
                    </div>
                </div>
                <div id="settings">
                    <ul>
                        <li>
                            <ThemeButton id='theme-light' label='Light Theme' icon='fa solid fa-sun color-accent' />
                        </li>
                        <li>
                            <ThemeButton id='theme-dark' label='Dark Theme' icon='fa solid fa-moon color-accent' active='active-theme' />
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )

}