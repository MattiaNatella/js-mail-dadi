let message = []
let numeroPlayer = Math.ceil(Math.random() * 6);
console.log(numeroPlayer)
let numeroPc = Math.ceil(Math.random() * 6);
console.log(numeroPc)

if (numeroPlayer > numeroPc){
    message = 'HAI VINTO';
}else if (numeroPlayer < numeroPc){
    message = 'HAI PERSO';
}else{
    message = 'PARI, RILANCIA';
}
console.log(message)