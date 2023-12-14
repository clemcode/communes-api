const apiUrl = "https://geo.api.gouv.fr/communes?nom="

const townInput = document.getElementById('town');
const sendButton = document.getElementById('send');
const townInfo = document.getElementById('townInformation');
const townList = document.getElementById('townList');

async function getTown(name) {
    const response = await fetch(apiUrl + name);
    const data = await response.json();
    return data
}

sendButton.addEventListener('click', async () => {
    const townData = await getTown(townInput.value)
    const nom = document.createElement('p');
    const codeDepartement = document.createElement('p');
    const population = document.createElement('p');

    townData.forEach((town, index) => {
        const liNom = document.createElement('li');
        const aNom = document.createElement('a');
        aNom.textContent = town.nom
        aNom.href = '#' + town.nom
        aNom.addEventListener('click', (event)=> showInfo(event.target.textContent))
        liNom.append(aNom)
        townList.append(liNom)
    });

    function showInfo(town) {
        const nomTown = townData.find((element) => element.nom === town)
        nom.textContent = nomTown.nom
        codeDepartement.textContent = nomTown.codeDepartement
        population.textContent = nomTown.population
        townInfo.appendChild(nom)
        townInfo.appendChild(codeDepartement)
        townInfo.appendChild(population)
    }
});