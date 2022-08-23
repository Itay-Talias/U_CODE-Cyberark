posts = [
    {
        name: "Itay Talias",
        text: "haaaaaaaaaaaaaaa",
    },
    {
        name: "Shalev",
        text: "baaaaaaaaaaaaaaa",
    },
];

const render = () => {
    let newPosts = `<div id="posts"></div>`;
    $("body").append(newPosts);
    for (let post of posts) {
        let newPost = `<div id="post">${post.name}: ${post.text}</div>`;
        $("#posts").append(newPost);
    }
};

render();

const onClick = () => {
    let newPost = {
        name: $("#input-Name").val(),
        text: $("#input-Birthday-wish").val(),
    };
    posts.push(newPost);
    $("#posts").remove();
    $("#input-Name").val("");
    $("#input-Birthday-wish").val("");
    render();
};

$("#btn-post").on("click", onClick);
