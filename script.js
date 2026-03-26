let romanticSongs = [
    {
        name: "Hua Hain Aaj Pehli Baar",
        file: "Songs/Hua Hain Aaj Pehli Baar.mp3",
        cover: "images/romantic1.jpg"
    },
    {
        name: "Jeene laga hu",
        file: "Songs/Jeene laga hu.mp3",
        cover: "images/romantic2.jpg"
    },
    {
        name: "Raabta",
        file: "Songs/Raabta.mp3",
        cover: "images/romantic3.jpg"
    }, 
    { 
       name: "Rabba Mehar kari",
       file: "Songs/Rabba Mehar Kari.mp3",
       cover: "images/romantic4.jpg"  
    },
    { 
       name: "Saathiya",
       file: "Songs/Saathiya.mp3",
       cover: "images/romantic5.jpg"  
    },
    { 
       name: "Sab Tera",
       file: "Songs/Sab Tera.mp3",
       cover: "images/romantic6.jpg"  
    }, 
    { 
       name: "Tera Naam",
       file: "Songs/Tera Naam.mp3",
       cover: "images/romantic7.jpg"  
    },
    { 
       name: "Teri Aankhon Mein",
       file: "Songs/Teri Aankhon Mein.mp3",
       cover: "images/romantic8.jpg"  
    },
    { 
       name: "Tum hi ho",
       file: "Songs/Tum hi ho.mp3",
       cover: "images/romantic9.jpg"  
    },
    { 
       name: "Tum Mere",
       file: "Songs/Tum Mere.mp3",
       cover: "images/romantic10.jpg"  
    },
];

let spicySongs = [
    {
        name: "Chiggy Wiggy",
        file: "Songs/Chiggy Wiggy.mp3",
        cover: "images/spicy1.jpg"
    },
    {
        name: "Chittiyan Kaalaiyan",
        file: "Songs/Chittiyan Kaalaiyann.mp3",
        cover: "images/spicy2.jpg"
    },
    {
        name: "Dance Like",
        file: "Songs/Dance Like.mp3",
        cover: "images/spicy3.jpg"
    },
   {
        name: "Koi Sehri babu",
        file: "Songs/Koi Sehri Babu.mp3",
        cover: "images/spicy4.jpg"
    },
    {
        name: "Luv Letter",
        file: "Songs/Luv Letter.mp3",
        cover: "images/spicy5.jpg"
    },
    {
        name: "Mere Naseeb Mein Tu",
        file: "Songs/Mere Naseeb Mein Tu.mp3",
        cover: "images/spicy6.jpg"
    },
    {
        name: "Pink Lips",
        file: "Songs/Pink Lips.mp3",
        cover: "images/spicy7.jpg"
    },
    {
        name: "Shake Karaan",
        file: "Songs/Shake Karaan.mp3",
        cover: "images/spicy8.jpg"
    }];

    let currentPlaylist = [];
let index = 0;

let player = document.getElementById("player");

// OPEN PLAYLIST
function openPlaylist(type) {
    document.getElementById("home").style.display = "none";
    document.getElementById("playerScreen").style.display = "block";

    if (type === "spicy") {
        currentPlaylist = spicySongs;
        document.getElementById("playlistTitle").innerText = "🌶 Spicy Songs";
    } else {
        currentPlaylist = romanticSongs;
        document.getElementById("playlistTitle").innerText = "❤️ Romantic Songs";
    }

    index = 0;
    loadSong();
}

// LOAD SONG
function loadSong() {
    let song = currentPlaylist[index];
    player.src = song.file;

    document.getElementById("songName").innerText = song.name;
    document.getElementById("cover").src = song.cover;
}

// PLAY
function playSong() {
    player.play();
}

// PAUSE
function pauseSong() {
    player.pause();
}

// NEXT
function nextSong() {
    index = (index + 1) % currentPlaylist.length;
    loadSong();
    player.play();
}

// PREV
function prevSong() {
    index = (index - 1 + currentPlaylist.length) % currentPlaylist.length;
    loadSong();
    player.play();
}

// BACK
function goBack() {
    player.pause();
    document.getElementById("home").style.display = "block";
    document.getElementById("playerScreen").style.display = "none";
}

// PROGRESS BAR
player.ontimeupdate = function () {
    if (player.duration) {
        document.getElementById("progress").value =
            (player.currentTime / player.duration) * 100;
    }
};

// SEEK
document.getElementById("progress").oninput = function () {
    player.currentTime = (this.value / 100) * player.duration;
};

// AUTO NEXT
player.onended = function () {
    nextSong();
};
function loadSongList() {
    let list = document.getElementById("songList");
    list.innerHTML = "";

    currentPlaylist.forEach((song, i) => {
        let div = document.createElement("div");
        div.innerText = song.name;
        div.classList.add("songItem");

        div.onclick = () => {
            index = i;
            loadSong();
            player.play();
            highlightSong();
        };

        list.appendChild(div);
    });

    highlightSong();
}
loadSongList();
function highlightSong() {
    let items = document.querySelectorAll(".songItem");

    items.forEach((item, i) => {
        item.classList.remove("activeSong");

        if (i === index) {
            item.classList.add("activeSong");
        }
    });
}
highlightSong();