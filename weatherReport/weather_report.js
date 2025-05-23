function showweatherDetails(event) {
    event.preventDefault();

    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    const apiKey = "38002a9e0ac05d99a9faabd927744d0d";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;




    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const coordinatesInfo = document.getElementById('coordinatesInfo');
            coordinatesInfo.innerHTML = `<h2>Weather at ${lat, lon}</h2>
                                     <p>Weather: ${data.name}</p>
                                     <p>Temerature: ${data.main.temp} &#8451;</p>
                                     <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const coordinatesInfo = document.getElementById('coordinatesInfo');
            coordinatesInfo.innerHTML = `<p> Failed to fetch weather. Please try again.</p>`;
        });

}
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails);