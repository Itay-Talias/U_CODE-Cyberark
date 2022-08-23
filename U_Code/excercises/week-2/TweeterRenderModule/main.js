const posts = [
    {
        id: "p1",
        text: "p1",
        comments: [{ id: "c1", text: "p1c1" }],
    },
    {
        id: "p2",
        text: "p2",
        comments: [
            { id: "c2", text: "p2c1" },
            { id: "c3", text: "p2c2" },
        ],
    },
    {
        id: "p3",
        text: "p3",
        comments: [
            { id: "c4", text: "p3c1" },
            { id: "c5", text: "p3c2" },
            { id: "c6", text: "p3c3" },
        ],
    },
    {
        id: "p4",
        text: "p4",
        comments: [{ id: "c7", text: "p4c1" }],
    },
    {
        id: "p5",
        text: "p5",
        comments: [],
    },
    {
        id: "p6",
        text: "p6",
        comments: [{ id: "c8", text: "p6c1" }],
    },
];

const renderPosts = (posts) => {
    let postsElement = $("#posts");
    for (let post of posts) {
        let newPostElement = `<div class="post" id="${post.id}"></div>`;
        postsElement.append(newPostElement);
        let PostElement = `<h2 class="post" data-id="${post.id}">${post.text} </h2>`;
        $(`#${post.id}`).append(PostElement);
        for (let comment of post.comments) {
            let CommentElement = `<div class="comment" data-id="${comment.id}">${comment.text} </div>`;
            $(`#${post.id}`).append(CommentElement);
        }
    }
};
