import { ALPHABET } from "./data.js";

const renderAlphabetItem = (alphabetItem) => {
    const alphabetItemEl = document.createElement("section");

    alphabetItemEl.style.setProperty("--alphabet-item-theme", alphabetItem.color);

    alphabetItemEl.innerHTML = `
        <div class="alphabet-item__letter">
            <span>${alphabetItem.word[0]}</span>
        </div>
    
        <div class="alphabet-item__card">
            <h2>${alphabetItem.word}</h2>
            <h3>${alphabetItem.description}</h3>
        </div>
    `;

    return alphabetItemEl;
}

document.addEventListener("DOMContentLoaded", () => {
    const alphabetRootEl = document.querySelector('#alphabet');

    ALPHABET.forEach((alphabetItem) => {
        alphabetRootEl.appendChild(renderAlphabetItem(alphabetItem));
    });
});