const SongsManager = () => {
    const songs = {};
    const URLStart = "https://www.youtube.com/watch?v=";

    const addSong = (key, link) => {
        songs[key] = link.slice(URLStart.length);
    };

    const getSong = (key) => {
        return URLStart + songs[key];
    };

    return {
        addSong,
        getSong,
    };
};

const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

console.log(songsManager.getSong("sax")); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
