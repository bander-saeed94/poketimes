import React, { Component } from 'react'
import { connect } from 'react-redux';

class Post extends Component {
    handleClick = (e) => {
        this.props.deletePost(this.props.post.id)
    }
    render() {
        console.log(this.props)
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button onClick={this.handleClick} className="btn grey">Delete Post</button>
                </div>
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
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => id == post.id)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch({ type: 'DELETE_POST', id }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);