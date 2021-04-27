// 1. Clccando su “via” il computer genera 5 numeri
// 2. Vengono mostrati per 5 secondi i numeri generati
// 3. Una volta inserito il quinto numero viene mostrato per 3 sec: “Calcolo in corso”
// 5. Vengono mostrati i numeri indovinati e se non ce ne sono viene mostrato “Hai perso, nessun numero indovinato!”
// 6. Opzionale:
// 	- alla fine far apparire un bottone “restart”
// 	- all’inizio fare scegliere all’utente con quanti numeri giocare

//variabili globali 
var arrRandom, arruser, arrResult;
var limit = 5;
var secAttesa = 5;

$(function() {
















});


//creo una funzione reset per gestire il punto di partenza

function reset() {
    arrRandom = [];
    arruser = [];
    arrResult = [];
}