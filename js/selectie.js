"use strict"

window.addEventListener("load", Initialise);

function Initialise(){
    const newsProvider = "Howest News";
    const newCategory = "Algemeen";

    let title = document.getElementById("title");
    title.innerHTML = `${newsProvider} - ${newCategory}`;
}

//Gebruik deze functie wanneer er op een vlaggetje geklikt wordt
function ChangeFlagColor() {
    if(this.className != "flag orange") {
        this.className = "flag orange";
    }
    else {
        this.className = "flag red";
    }
}