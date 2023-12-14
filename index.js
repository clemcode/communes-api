const apiUrl = "https://geo.api.gouv.fr/communes?nom="

async function getTown(name) {
    const response = await fetch(apiUrl + name);
    const data = await response.json();
    console.log(data);
}

const townInput = document.getElementById('town');
const sendButton = document.getElementById('send');

sendButton.addEventListener('click', async () => {
    await getTown(townInput.value)
});
