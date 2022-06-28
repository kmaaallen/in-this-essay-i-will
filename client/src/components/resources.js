import React, { useEffect, useState } from "react";

export default function Resources() {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        async function getResources() {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/resources`);
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
        <div id="resources">
            <h3>Useful links</h3>
            <ul>
                {resources.map((link) => {
                    return (
                        <li key={link.label}>
                            <a href={link.url} target="blank">{link.label}</a>
                        </li>
                    )
                })}
            </ul >
        </div>
    )
}
