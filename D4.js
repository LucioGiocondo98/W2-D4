/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function(l1,l2){
    const areatriangolo = l1 * l2
    console.log(areatriangolo);
}
area(5,8)
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (n1,n2){   
    if ( n1 === n2){
        return (n1+n2) * 3
    } else {
        return n1+ n2
    }
}
crazySum(5,7)
console.log(crazySum(5,7))
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff= function (par1,par2= 19){
if ( par1 > 19 ){
    return (Math.abs(par1-par2))*3
} else {
    return Math.abs(par1 -par2)
}    

}
crazyDiff(8)
console.log(crazyDiff(8))
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary= function(n){
    if( n > 20 && n < 100){
        return 'true'
    } else if ( n === 400){
        return 'true'
    } else{
        return 'false'
    }
}
boundary(30)
boundary(400)
console.log(boundary(30))
console.log(boundary(400))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function(word){
    if( word === 'EPICODE'){
        return 'EPICODE'}
        else {
            return (word + 'EPICODE')
        }
}
epify('HELLO')
epify('EPICODE GIA SAI')
epify('CIAO MIO AMICO ')

console.log(epify('HELLO'))
console.log(epify('EPICODE GIA SAI'))
console.log(epify('CIAO MIO AMICO '))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (numberP){
    if ( numberP >= 0 && ((numberP % 7) === 0)  || (numberP % 3)=== 0){
        return 'MULTIPLO MULTIPLO DI 3 O DI 7'
} else {
return 'NON MULTIPLO DI 3 O DI 7'
}
}
check3and7(27)
check3and7(71)

console.log(check3and7(27))
console.log(check3and7(71))
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (stringa){
    const word1= stringa.split('').reverse().join('')
    return word1
}
reverseString('EPICODE')    
console.log(reverseString('EPICODE'))
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
