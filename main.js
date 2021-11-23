const randomDogButton = document.querySelector("#dog-button");
const randomDog = document.querySelector(".card-img-top");

randomDogButton.addEventListener("click", function () {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (data) {
        return data.json();
    })
    .then(function (parseData) {
        randomDog.src = parseData.message;
    });
});

// weather api
const cityButton = document.querySelector("#city-button");

cityButton.addEventListener("click", function() {
    const city = document.querySelector("#city-input");
    fetch(`https://goweather.herokuapp.com/weather/${city.value}`)
    .then(function (data) {
        return data.json();
    })
    .then(function (parseData) {
        const header = document.querySelector("#weather-header");
        const temp = document.querySelector("#temp");
        const wind = document.querySelector("#wind")
        const desc = document.querySelector("#desc");
        header.innerText = `Weather detail for ${city.value}`
        temp.innerText = `Temp: ${parseData.temperature}`
        wind.innerText = `Wind: ${parseData.wind}`
        desc.innerText = `Description: ${parseData.description}`
    });
});