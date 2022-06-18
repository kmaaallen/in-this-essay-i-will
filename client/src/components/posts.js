import React from 'react'

export default function Posts(props) {

    return (
        <ul>
            {props.posts.map((post) => {
                return (
                    <li key={post.title}>
                        <h3>{post.title}</h3>
                        <p>{post.subtitle}</p>
                        <p className='published'>{post.published}</p>
                        <hr />
                    </li>
                )
            })}
        </ul >
    )
}
