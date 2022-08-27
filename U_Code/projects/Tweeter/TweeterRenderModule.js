const RenderTweeter = () => {
    const renderPosts = (posts) => {
        const postsElement = $("#posts");
        postsElement.empty();
        for (const post of posts) {
            const newPostElement = `<div class="post" id="${post.id}"></div>`;
            postsElement.append(newPostElement);
            const deletePost = `<button class="delete">X</button>`;
            $(`#${post.id}`).append(deletePost);
            const PostElement = `<h3 class="post-text" data-id="${post.id}">${post.text} </h3>`;
            $(`#${post.id}`).append(PostElement);
            for (const comment of post.comments) {
                const newComment = `<div class="comment" id="${comment.id}"></div>`;
                $(`#${post.id}`).append(newComment);
                const deleteComment = `<button class="delete-comment">X</button>`;
                $(`#${comment.id}`).append(deleteComment);
                const CommentElement = `<div class="text-comment" data-id="${comment.id}">${comment.text} </div>`;
                $(`#${comment.id}`).append(CommentElement);
                const likecomment = comment.like
                    ? `<button class="btn-like-comment">unlike</button>`
                    : `<button class="btn-like-comment">like</button>`;
                $(`#${comment.id}`).append(likecomment);
            }
            const inputComment = `<input type="text" placeholder="write a comment" class="input-comment" />`;
            const btnInputComment = `<button class="btn-comment" >Comment</button>`;
            $(`#${post.id}`).append(inputComment);
            $(`#${post.id}`).append(btnInputComment);
            const likePost = post.like
                ? `<button class="btn-like-post">unlike</button>`
                : `<button class="btn-like-post">like</button>`;
            $(`#${post.id}`).append(likePost);
        }
    };
    return { renderPosts };
};
