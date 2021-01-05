let textInput = document.querySelector("#input-text");
let translateBtn = document.querySelector(".translate-btn");
let translatedText = document.querySelector(".translated-text");

const API = "https://api.funtranslations.com/translate/minion.json?text=";

translateBtn.addEventListener("click", () => {
  fetch(API + textInput.value)
    .then((response) => response.json())
    .then((json) => (translatedText.innerHTML = json.contents.translated))
    .catch((error) => console.error(error));
});
