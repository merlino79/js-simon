// 1. Clccando su “via” il computer genera 5 numeri
// 2. Vengono mostrati per 5 secondi i numeri generati
// 3. Una volta inserito il quinto numero viene mostrato per 3 sec: “Calcolo in corso”
// 5. Vengono mostrati i numeri indovinati e se non ce ne sono viene mostrato “Hai perso, nessun numero indovinato!”
// 6. Opzionale:
// 	- alla fine far apparire un bottone “restart”
// 	- all’inizio fare scegliere all’utente con quanti numeri giocare





$(function() {


    //variabili
    var arrRandom = [];

    //funzioni


    function reset() {

        $('#btn-start').show();
        $('#btn-box').hide();
    }; //per nascondere l'html

    function printOutput(txt, target) {
        $(target).text(txt); //funzione di print
    }

    $('#btn-start').click(function() {
        alert('Aresenè') //richiamo il btn-start
            // while(arrRandom.length < 5){

        // };

    });








    //richiamo funzione

    reset();
    printOutput('ciao clicca su inizio per giocare', '#display');






});