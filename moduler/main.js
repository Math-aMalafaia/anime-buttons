const narutoButton = document.getElementById("naruto-btn");

const dragonBallButton = document.getElementById("dragonball-btn");

const animeTitle = document.getElementById("anime-title");

const animeInfo = document.getElementById("anime-info");

function updateAnime(anime){

    document.body.style.background = anime.background;

    animeTitle.innerText = anime.title;

    animeInfo.innerText = anime.description;
}

narutoButton.addEventListener("click", () => {
    updateAnime(naruto);
});

dragonBallButton.addEventListener("click", () => {
    updateAnime(dragonBall);
});