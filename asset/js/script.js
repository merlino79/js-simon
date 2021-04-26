// 1. Clccando su “via” il computer genera 5 numeri
// 2. Vengono mostrati per 5 secondi i numeri generati
// 3. Una volta inserito il quinto numero viene mostrato per 3 sec: “Calcolo in corso”
// 5. Vengono mostrati i numeri indovinati e se non ce ne sono viene mostrato “Hai perso, nessun numero indovinato!”
// 6. Opzionale:
// 	- alla fine far apparire un bottone “restart”
// 	- all’inizio fare scegliere all’utente con quanti numeri giocare





$(function() {

    function reset() {
        printOutput('ciao sei pronto,clicca inizio', '#display');
        $('#btn-start').show();
        $('#btn-box').hide();
    };



    reset();

    function printOutput(text, target) {
        $(target).txt(text); //funzione di print
    }



});