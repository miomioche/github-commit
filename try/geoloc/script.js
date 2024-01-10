// Pour réaliser cet exercice, vous utiliserez l'api d'openweather.
// Ici l'end point à utiliser --> https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// Remplacez lat et lon par les coordonnées de votre choix.
// Remplacez API key par votre clé d'API. ( s'inscrire sur le site d'openweather pour obtenir une clé d'API)

const api_key = "d12a194fbdb40774f191ec845d621eb4";

const changerVille = document.querySelector(".changerVille");

changerVille.addEventListener("click", () => {
	let ville = prompt("Quelle ville souhaitez-vous voir ?");
	getTemperature(ville);
})

function getTemperature(ville) {
	fetch('https://api.openweathermap.org/data/2.5/weather?q='+ville+'&units=metric&appid='+api_key)
	.then(response => response.json())
    .then(data => {
		let temperature = data.main.temp+' °C';
		let ville = data.name;
		ville = ville.replace('Arrondissement de ', '');
		
		document.querySelector(".ville").textContent = ville;
		document.querySelector(".temperature").textContent = temperature;
	})
	.catch(error => console.log(error))
}

getTemperature(ville);