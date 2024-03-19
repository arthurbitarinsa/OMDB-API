const fetchButton = document.getElementById('fetchButton');
const titleInput = document.getElementById('titleInput');
const resultsDiv = document.getElementById('results');

fetchButton.addEventListener('click', async () => {
    const title = titleInput.value;

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=27faa77b&t=${title}`);
        const data = await response.json(); //https://www.omdbapi.com/?apikey=27faa77b&t

        const resultDiv = document.createElement('div');
        resultDiv.textContent = `Title: ${data.Title}, Year: ${data.Year} Country: ${data.Country} writer: ${data.Writer} genre: ${data.Genre} type ${data.Type}`;
        resultsDiv.appendChild(resultDiv);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
