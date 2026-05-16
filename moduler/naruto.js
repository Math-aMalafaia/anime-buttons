const narutoButton = document.getElementById("naruto-btn");

const animeInfo = document.getElementById("anime-info");

narutoButton.addEventListener("click", () => {

    document.body.style.background = "#ff7b00";

    animeInfo.innerHTML = `
        Naruto Uzumaki é um ninja da Vila da Folha
        que sonha em se tornar Hokage e ser reconhecido
        por todos.
    `;

    narutoButton.innerText = "Naruto Ativado!";
});