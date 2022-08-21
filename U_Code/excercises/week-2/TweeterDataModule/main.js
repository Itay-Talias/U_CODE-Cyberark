const LogicTweeter = () => {
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

const tweeter = LogicTweeter();

tweeter.addPost("This is my own post!");
tweeter.addPost("2");
tweeter.addPost("3");
tweeter.addPost("4");
tweeter.addPost("5");
console.log(tweeter.getPosts());

tweeter.removePost("p2");
tweeter.removePost("p3");
console.log(tweeter.getPosts());

tweeter.addComment("p1", "aiiiii");
tweeter.addComment("p1", "biiiii");
tweeter.addComment("p2", "ciiiii");
tweeter.addComment("p4", "diiiii");
tweeter.addComment("p5", "eiiiii");
console.log(tweeter.getPosts());

tweeter.removeComment("p1", "c2");
tweeter.removeComment("p4", "c3");
console.log(tweeter.getPosts());
