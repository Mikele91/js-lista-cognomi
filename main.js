


var cognomi = ["bianchi", "neri", "rossi", "verdi", "gialli"];

// 1. chiedi all’utente il cognome
var nomeUtente = prompt("Inserisci il tuo cognome").toLowerCase();

cognomi.push(nomeUtente)
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
cognomi = cognomi.sort();

console.log(cognomi);

for(i=0; i< cognomi.length; i++){
 
  console.log (cognomi[i] + " è alla posizione " + (i+1) );
}
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
console.log (" la tua posizione è la numero "+ (cognomi.indexOf(nomeUtente) + 1));
// Consigli del giorno:
// Consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.
// Buon lavoro e buon divertimento! 

