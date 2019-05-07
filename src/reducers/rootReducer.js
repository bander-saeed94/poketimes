
const initState = {
    posts: [
        { id: 1, title: 'title1', body: 'body1' },
        { id: 2, title: 'title2', body: 'body2' },
        { id: 3, title: 'title3', body: 'body3' },
    ],
};
const rootReducer = (state = initState, action) => {
    console.log(action);
    if (action.type == `DELETE_POST`) {
        let newPosts = state.posts.filter(post => post.id != action.id);
        return {
            ...state,
            posts: newPosts
        }
    }
    else {
        return state;
    }
};

export default rootReducer;