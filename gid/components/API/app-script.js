//API Rick & Morty
fetch('https://rickandmortyapi.com/api/character')
        .then((response)=>response.json())
        .then((data)=>Cards(data.results));

function Cards(stuff){
    const cardContainer = document.querySelector('#card-group')
    stuff.forEach(character => {
        cardContainer.innerHTML += `
            <div class="card">
                <img src=${character.image} class="card-img">
                <span class="text name">${character.name}</span>
                <span class="text gender">Gender: ${character.gender}</span>
                <span class="text location">Location: ${character.location.name}</span>
            </div>
        `
    });
}
