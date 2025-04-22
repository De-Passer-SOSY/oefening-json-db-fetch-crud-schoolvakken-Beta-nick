"use strict";

document.addEventListener("DOMContentLoaded", init)

function init(){
    console.log('De website is ingeladen');
    document.querySelector('#addButton').addEventListener('click', addVak);
    fetchVakken();
}

async function fetchVakken(){
    try{
        let response = await fetch("http://localhost:5688/vakken");
        let vakken = await response.json();
        displayVakken(Vakken);
    }
    catch(error){
        console.error('Fout bij het ophalen van de vakken', error);
    }
}