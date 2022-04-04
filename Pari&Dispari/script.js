//Creo un prompt per far scegliere all'utente pari o dispari
//Creo un altro prompt per far sceliere all'utente un numero da 1 a 5
//Creo una funzione per generare un numero random da 1 a 5 per il computer
//Sommo i due numeri
//Creo una funzione per verificare se il totale dei numeri sommati è pari o dispari 
//Creo un alert per dichiarare il vincitore

//Funzione per generare numeri random pc
function pcnumberGenerator(){
    
    let pcNumber;
    pcNumber = Math.round(Math.random() * 4) + 1;
    return pcNumber;

}

//Funzione verificare se il numero sommmato è pari o dispari
function evenoddCheck(){
    if (sumNumbers % 2 == 0){

        return 'Pari';

    } else {

        return 'Dispari';

    }
};

 //Scelgo pari o dispari
let evenOdd = prompt('Scegliere tra Pari o Dispari');
alert(`L'utente ha scelto ${evenOdd}`);

//Scelgo un numero tra 1 e 5 
let userNumber = parseInt(prompt('Scegliere un numero da 1 a 5'));
if ((userNumber < 1) || (userNumber > 5)){

    alert('I valori inseriti non sono validi, la preghiamo di inserire un numero da 1 a 5!');

}
alert(`Il numero scelto dall'utente è: ${userNumber}`);

//Mostro il numero generato per il computer
let pcNum = pcnumberGenerator();
alert(`Il numero generato per il computer è ${pcNum}`)

//Sommo i due numeri
let sumNumbers = userNumber + pcNum;

//Dichiaro il vincitore
let result = evenoddCheck(sumNumbers);
if(evenOdd === result){

    alert(`La somma dei numeri è ${sumNumbers}, pertanto il vincitore è l'utente!!`);

} else {

    alert(`La somma dei numeri è ${sumNumbers}, pertanto il vincitore è il computer!!`);

}