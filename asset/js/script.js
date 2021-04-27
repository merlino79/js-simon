// 1. Clccando su “via” il computer genera 5 numeri
// 2. Vengono mostrati per 5 secondi i numeri generati
// 3. Una volta inserito il quinto numero viene mostrato per 3 sec: “Calcolo in corso”
// 5. Vengono mostrati i numeri indovinati e se non ce ne sono viene mostrato “Hai perso, nessun numero indovinato!”
// 6. Opzionale:
// 	- alla fine far apparire un bottone “restart”
// 	- all’inizio fare scegliere all’utente con quanti numeri giocare


//variabili globali 
var arrRandom, arrUser, arrResult;
var limit = 5;
var secAttesa = 5;
//

$(function() {

    //richiamato la mia funzione reset la funzione
    reset();














    $('#start').click(function() {
        while (arrRandom.length < limit) {
            console.log(arrRandom);


            var nr = generatorRandomNumber(1, 100);
            arrRandom.push(nr);
            if (!arrRandom.includes(nr)) arrRandom.push(nr); //serve per non fare ripetere i numeri
            printDisplay('i numeri sono: ' + arrRandom.join('-')); //stampo a video i numeri e aggiungendo .join (sistemo i numeri con - )



            setTimeout(function() {
                printDisplay('Inserisci ' + limit + ' numeri.');
                $('#console').show();
                $('#start').hide();
            }, secAttesa * 1000); //funzione di attesa 








        };
        //console.log(arrRandom);




    });

    $('#restart').click(function() {
        console.log('bottone restart');
    });

    $('#send-number').click(function() {
        console.log('bottone send-number');
    });
















});


//creo una funzione reset per gestire il punto di partenza

function reset() {
    arrRandom = [];
    arrUser = [];
    arrResult = [];
    printDisplay('per iniziare a giocare premero invio');
    $('#display').show();
    $('#start').show();
    $('#restart').hide();
    $('#console').hide();

}
//funzione generatore di numeri
function generatorRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
};


//fiìunziona stampa
function printDisplay(text) {
    $('#display').text(text);
}