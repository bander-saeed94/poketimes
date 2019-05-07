import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from "react-redux";

class Home extends Component {
    render() {
        const { posts } = this.props;
        const postList = posts.length > 0 ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="a boke ball"/>
                        <div className="card-content">
                            <Link to={'/posts/' + post.id} >
                            <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">No Posts yet</div>
            )
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    //state coming from redux
    //to component props
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);
