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
var secAttesa = 3; //
//

$(function() {

    //richiamato la mia funzione reset la funzione
    reset();












    //prima parte

    $('#start').click(function() {
        while (arrRandom.length < limit) {
            console.log(arrRandom);


            var nr = generatorRandomNumber(1, 100);
            arrRandom.push(nr);
            if (!arrRandom.includes(nr)) arrRandom.push(nr); //serve per non fare ripetere i numeri
            printDisplay('i numeri sono: ' + arrRandom.join('-')); //stampo a video i numeri e aggiungendo .join (sistemo i numeri con - )


            $('#start').hide(); //è stato messo fuori dalla funzione se no scopmare dopo che escono i numeri
            setTimeout(function() {
                printDisplay('Inserisci ' + limit + ' numeri.');

                $('#console').show();

            }, secAttesa * 1000); //funzione di attesa //








        };
        //console.log(arrRandom);




    });

    //seconda parte

    $('#send-number').click(function() {
        //console.log('bottone send-number');
        //console.log($('input').val()); //premendo sul bottone invia mi restituisce alla consol.log i numeri premuti
        // arrUser.push($('input').val())
        // console.log(arrUser); //verifico alla consol i numeri aggiunti premendo il bottone invia
        if (arrUser.length < limit) {
            // impedisco i numeri doppi e ti avverto
            if (arrUser.includes($('input').val())) {
                printDisplay('Attenzione numero già inserito');
            } else {
                // inserimento ocrretto con output
                arrUser.push($('input').val());
                printDisplay('Numeri inseriti: ' + arrUser.join(' - '));
            }
        }
        if (arrUser.length === limit) {

            for (var num of arrUser) {
                console.log(num);
                if (arrRandom.includes(parseInt(num))) {
                    arrResult.push(num);
                } //ciclato il mio arraay e l'ho confrontato con i suoi numero e ho catturato i numeri corrispondenti
                console.log(arrResult);

            } //ciclo 


            setTimeout(function() {
                //console.log('fine');
                printDisplay('Attesa');
                $('#console').hide();




            }, 500);

            setTimeout(function() {
                //console.log('fine');
                printDisplay('il risultato è :');
                $('#console').hide();
                if (arrResult.length === 0) {
                    printDisplay('Hai perso!')
                } else if (arrResult.length === limit) {
                    printDisplay('Hai vinto');
                } else {
                    printDisplay('Hai indovinato questi numeri: ' + arrResult.join(' - '));
                }
                $('#restart').show();




            }, 2500);



        }

        $('input').val('');
        $('input').focus();



    });



    $('#restart').click(function() {
        //console.log('bottone restart');
        reset(); // richiamo della funzione reset


    });
















});


//creo una funzione reset per gestire il punto di partenza

function reset() {
    limit = parseInt(prompt('Scegli quanti numeri inserire'));

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