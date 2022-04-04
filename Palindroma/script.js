//Chiedere all'utente di inserire una parola
//Creare una funzione che permette di capire se la parola inserita è palindroma o no

function paliParola(){

    let parolaDivisa = userWord.split('');
    let parolaUnita = '';
    for (let i = parolaDivisa.length - 1; i >= 0; i-- ){

        parolaUnita += parolaDivisa[i];

    }

    return parolaUnita;

} 

let userWord = prompt('Inserire una parola');
let comparisonWord = paliParola(userWord);

if ( userWord === comparisonWord){
    alert(`${comparisonWord} è palindroma`);
} else {
    alert(`${userWord} non è palindroma`);
}
