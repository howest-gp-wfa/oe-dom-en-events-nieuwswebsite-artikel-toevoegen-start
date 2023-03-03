"use strict";

window.addEventListener("load", initialise);

function initialise() {
    const newsProvider = "Howest News";
    const newCategory = "Algemeen";

    const hdgTitle = document.getElementById("title");
    hdgTitle.textContent = `${newsProvider} - ${newCategory}`;

    const backToTop = document.createElement("a");
    backToTop.textContent = "Terug naar boven";

    backToTop.setAttribute("href", "#");
    backToTop.setAttribute("style", "display: block; text-align: center;");

    const body = document.querySelector("body");
    body.appendChild(backToTop);
}

// Adds click eventlistener to change flag colour on click
function addClickEventToFlagList(elementsList) {

    for(let i = 0; i < elementsList.length; i++) {

        elementsList[i].addEventListener("click", changeFlagColor);
        
    }
}

// Use this function to execute when someone clicks on a flag
function changeFlagColor() {
    if(this.className != "flag orange") {
        this.className = "flag orange";
    }
    else {
        this.className = "flag red";
    }
}
