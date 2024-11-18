
const listaEmail = ['mattianatella@gmail.com', 'gigolo94@gmail.com']
console.log(listaEmail)

let inserisciMail = prompt('Inserisci qui la tua email')
let message = '';

if (listaEmail.includes(inserisciMail)) {
  console.log(typeof listaEmail.includes)
  message = ` l'indirizzo mail ${inserisciMail} rientra nella lista degli utenti abilitati all'accesso`
} else {
  message = ` l'indirizzo mail ${inserisciMail} NON rientra nella lista degli utenti abilitati all'accesso`
}

console.log(message)
