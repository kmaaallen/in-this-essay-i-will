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
                        {/* For now just displaying body of post on homepage - TO BE IMPROVED*/}
                        <div dangerouslySetInnerHTML={{ __html: post.body }} />
                        <hr />
                    </li>
                )
            })}
        </ul >
    )
}
