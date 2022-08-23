const DataTweeter = () => {
    let _POST_DATA = [];

    let _POST_NUMBER = 1;
    let _COMMENT_NUMBER = 1;

    const getPosts = () => {
        return _POST_DATA;
    };

    const addPost = (text) => {
        _POST_DATA.push({ text: text, id: "p" + _POST_NUMBER, comments: [] });
        _POST_NUMBER++;
    };

    const removePost = (postID) => {
        _POST_DATA = _POST_DATA.filter((post) => post.id !== postID);
    };

    const addComment = (id, text) => {
        _POST_DATA.forEach((post) => {
            if (post.id === id) {
                post.comments.push({ id: "c" + _COMMENT_NUMBER, text: text });
                _COMMENT_NUMBER++;
            }
        });
    };

    const removeComment = (postId, commentId) => {
        _POST_DATA.forEach((post) => {
            if (post.id === postId) {
                post.comments = post.comments.filter(
                    (comment) => comment.id !== commentId
                );
            }
        });
    };

    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment,
    };
};
