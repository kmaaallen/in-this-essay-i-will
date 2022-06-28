import React from 'react'
import { Link } from 'react-router-dom';

export default function Posts(props) {

    return (
        <ul>
            {props.posts.map((post) => {
                return (
                    <Link to={`/post/${post._id}`} key={post._id}>
                        <li key={post.title}>
                            <h3>{post.title}</h3>
                            <p>{post.subtitle}</p>
                            <p className='published'>{post.published}</p>
                            <hr />
                        </li>
                    </Link>
                )
            })}
        </ul >
    )
}
