"use strict"

window.addEventListener("load", Initialise);

function Initialise(){
    const newsProvider = "Howest News";
    const newCategory = "Algemeen";

    let title = document.getElementById("title");
    title.innerHTML = `${newsProvider} - ${newCategory}`;
}