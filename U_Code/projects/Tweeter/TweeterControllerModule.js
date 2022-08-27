const tweeter = DataTweeter();
const renderer = RenderTweeter();

renderer.renderPosts(tweeter.getPosts());

const post = () => {
    const newTextPost = $("#input").val();
    tweeter.addPost(newTextPost);
    renderer.renderPosts(tweeter.getPosts());
    $("#input").val("");
};

const deletePost = function () {
    const postIDToDelete = $(this).closest(".post").attr("id");
    tweeter.removePost(postIDToDelete);
    renderer.renderPosts(tweeter.getPosts());
};

const likePost = function () {
    const postIDToLike = $(this).closest(".post").attr("id");
    tweeter.setLikePost(postIDToLike);
    renderer.renderPosts(tweeter.getPosts());
};

const addComment = function () {
    const postIDToAddingComment = $(this).closest(".post").attr("id");
    const textComment = $(this).closest(".post").find(".input-comment").val();
    tweeter.addComment(postIDToAddingComment, textComment);
    renderer.renderPosts(tweeter.getPosts());
};

const deleteComment = function () {
    const postIDToAddingComment = $(this).closest(".post").attr("id");
    const commentIDToAddingComment = $(this).closest(".comment").attr("id");
    tweeter.removeComment(postIDToAddingComment, commentIDToAddingComment);
    renderer.renderPosts(tweeter.getPosts());
};

const likeComment = function () {
    const postIDToLikeComment = $(this).closest(".post").attr("id");
    const commentIDToLikeComment = $(this).closest(".comment").attr("id");
    tweeter.setLikeComment(postIDToLikeComment, commentIDToLikeComment);
    renderer.renderPosts(tweeter.getPosts());
};

$("body").on("click", ".delete", deletePost);
$("body").on("click", ".btn-comment", addComment);
$("body").on("click", ".delete-comment", deleteComment);
$("body").on("click", ".btn-like-post", likePost);
$("body").on("click", ".btn-like-comment", likeComment);
