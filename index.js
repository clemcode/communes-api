const apiUrl = "https://geo.api.gouv.fr/communes?nom="

async function getTown(name) {
    const response = await fetch(apiUrl + name);
    const data = await response.json();
    console.log(data);
    return data
}

const townInput = document.getElementById('town');
const sendButton = document.getElementById('send');

const townInfo = document.getElementById('information-town');

sendButton.addEventListener('click', async () => {
    
    const townData = await getTown(townInput.value)

    const nom = document.createElement('p');
    const codeDepartement = document.createElement('p');
    const population = document.createElement('p');

    nom.textContent = townData[0].nom
    codeDepartement.textContent = townData[0].codeDepartement
    population.textContent = townData[0].population
    townInfo.appendChild(nom)
    townInfo.appendChild(codeDepartement)
    townInfo.appendChild(population)
});

