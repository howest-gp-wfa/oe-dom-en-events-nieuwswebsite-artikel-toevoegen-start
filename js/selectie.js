"use strict";

window.addEventListener("load", initialise);

function initialise(){
    const newsProvider = "Howest News";
    const newCategory = "Algemeen";

    const title = document.getElementById("title");
    title.textContent = `${newsProvider} - ${newCategory}`;
}

//Gebruik deze functie wanneer er op een vlaggetje geklikt wordt
function changeFlagColor() {
    if(this.className != "flag orange") {
        this.className = "flag orange";
    }
    else {
        this.className = "flag red";
    }
}