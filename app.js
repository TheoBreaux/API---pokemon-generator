let randNum = Math.floor(Math.random() *905);

const apiData = {
    name: "pikachu",
    id: randNum.toString(),
    url: "https://pokeapi.co/api/v2/",
    type: "pokemon",
    weight: "60",
    height: "4"
}

const { url, type, id } = apiData
const apiUrl = `${url}${type}/${id}`;

fetch(apiUrl)
    .then((data) => data.json())
    .then((pokemon) => generateHTML(pokemon));


const generateHTML = (data) => {
    const html = `
        <div class="name">${data.name}</div>
            <img src=${data.sprites.front_default}>
            <div class="details">
                <span> Height: ${data.height}</span>
                <span> Weight: ${data.weight}</span>
             </div>
            `
    const pokemonDiv = document.querySelector(".pokemon");
    pokemonDiv.innerHTML = html;
}




