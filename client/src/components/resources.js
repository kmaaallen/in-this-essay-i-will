import React from 'react'

export default function Resources(props) {
    return (
        <ul>
            {props.resources.map((link) => {
                return (
                    <li key={link.label}>
                        <a href={link.url} target="blank">{link.label}</a>
                    </li>
                )
            })}
        </ul >
    )
}
