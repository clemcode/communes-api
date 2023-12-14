const apiUrl = "https://geo.api.gouv.fr/communes?limit=15&nom="

const townInput = document.getElementById("town")
const townInfo = document.getElementById("townInformation")
const townList = document.getElementById("townList")

async function getTown(name) {
    const response = await fetch(apiUrl + name)
    return response.json()
}

let timeOut
townInput.addEventListener("input", async (event) => {
    if (event.target.value.length === 0) {
    }
    if (event.target.value.length < 2) {
        return
    }
    clearTimeout(timeOut)
    timeOut = setTimeout(async () => {
        const townData = await getTown(townInput.value)
        townList.innerHTML = ""
        townData.forEach((town) => {
            const liName = document.createElement("li")
            const aName = document.createElement("a")
            aName.textContent = town.nom
            const selectedTown = townData.find(
                (element) => element.siren === town.siren
            )
            aName.href = "#" + town.nom
            aName.addEventListener("click", () => showInfo(selectedTown))
            liName.append(aName)
            townList.append(liName)
        })
    }, 444)
})

function showInfo(town) {
    const pName = document.createElement("p")
    const pCodeDepartement = document.createElement("p")
    const pPopulation = document.createElement("p")
    pName.textContent = town.nom
    pCodeDepartement.textContent = town.codeDepartement
    pPopulation.textContent = town.population
    townInfo.appendChild(pName)
    townInfo.appendChild(pCodeDepartement)
    townInfo.appendChild(pPopulation)
    townInput.value = town.nom
}
