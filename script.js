const btnElement = document.getElementById('btn');
const jokeElement = document.getElementById('joke');

const apiKey = "dOLxEGyGjLZJm04xRdCzkQ==EbvDiB15XR9t1grR";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=";


const options = {
    method: 'GET',
    headers: {"X-Api-Key": apiKey},
};


btnElement.onclick = async() => {
    try {
        jokeElement.innerText = 'updating...'
    
        btnElement.disabled = true;
        btnElement.innerText = 'Loading...'
    
        const response = await fetch(apiURL, options)
        const data = await response.json();
    
        btnElement.disabled  = false;
        btnElement.innerText = 'TELL ME A JOKE';
        
        jokeElement.innerText = data[0]['joke'];   //.joke
        
    } catch (error) {
        jokeElement.innerText = error;
        btnElement.disabled = false;
        btnElement.innerText = 'TELL ME A JOKE';
    }
}



