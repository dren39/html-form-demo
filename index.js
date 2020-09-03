const form = document.querySelector('.form-container');
const respContainer = document.querySelector('.resp-container');

function renderData(data) {
    respContainer.innerHTML += `
        <h3>This is your IP information</h3>
        <p>City: ${data.city}</p>
        <p>Region: ${data.region}</p>
        <p>Country: ${data.country}</p>
        <p>Postal: ${data.postal}</p>
  `
}

form.addEventListener("submit", event => {
    event.preventDefault();
    const input = document.querySelector('.ip-input');
    fetch(`https://ipinfo.io/${input.value}/json`)
    .then(resp => resp.json())
    .then(data => renderData(data))
})