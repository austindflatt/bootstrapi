const randomDogButton = document.querySelector("#dog-button");
const randomDog = document.querySelector('.card-img-top');

randomDogButton.addEventListener("click", function () {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (data) {
        return data.json();
    })
    .then(function (parseData) {
        randomDog.src = parseData.message;
    });
});