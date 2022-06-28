import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
// Components
import Resources from "./resources";

export default function Post() {
    const [post, setPost] = useState([]);

    const params = useParams();

    // Fetch post.
    useEffect(() => {
        async function getPost() {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/post/${params.id.toString()}`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const post = await response.json();
            setPost(post);
        }
        getPost();
        return;
    }, [params.id]);

    return (
        <main>
            <div>
                <Link to="/" className="homelink"><i className="fa-solid fa-arrow-left"></i> Back</Link>
                <h2>{post.title}</h2>
                <p>{post.subtitle}</p>
                <p className='published'>{post.published}</p>
                <div dangerouslySetInnerHTML={{ __html: post.body }} />
            </div>
            <Resources />
        </main >
    )
}
