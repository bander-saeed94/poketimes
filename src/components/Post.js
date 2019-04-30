import React, { Component } from 'react'
import axios from 'axios';
class Post extends Component {
    state = {
        post: null
    }
    async componentDidMount() {
        let id = this.props.match.params.post_id;
        let res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
        this.setState({
            post: res.data
        });
    }
    render() {
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
                <div className="container">
                    Loading post...
                </div>
            );
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}
export default Post;