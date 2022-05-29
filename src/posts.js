'use strict';

import { blogs } from './blog.js';
const e = React.createElement;


class BlogPosts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.posts);
        const posts = this.props.posts.map((post) =>
            e('li', {}, [
                e('a', { href: "/", target: "_blank" }, post.title),
                e('p', {}, post.subtitle),
                e('p', { className: 'published' }, post.published),
                e('hr', {}, null)
            ])
        )
        return e(
            'ul',
            {},
            [...posts]
        );
    }
}

const domContainer = document.querySelector('#blog_list_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(BlogPosts, { posts: blogs }));
