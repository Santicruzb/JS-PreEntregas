
let palabras = [
   "maestro",
  "educacion",
  "universidad",
  "estudiar", 
  "coderhouse"
]
let palabra = palabras [Math.floor(Math.random() * palabras.length)]
// console.log(palabra) -> para verificar que se elige un nombre random 
let respuesta = []
for (let i = 0; i <palabra.length; i++) {
  respuesta [i] = "_";
}
let letrasRestantes = palabra.length
//console.log (respuesta) -> para verificar que el bucle for imprima bien las "_"
// al promt ponerle un .lowercase
do{
  let adivinar = prompt("Adivina una letra, o hace click en Cancel para dejar de jugar");
  console.log(respuesta)
  const letraMinuscula = adivinar.toLowerCase ()
  if (letraMinuscula === null) {
     break;}
     else if (letraMinuscula.length !== 1) {
     alert ("Porfavor escribir 1 letra a la vez.")} 
     else { for (let j = 0; j<palabra.length ;j++) {
      if (palabra[j] === letraMinuscula) {
      //console.log(adivinar, palabra[j])
       respuesta[j] = palabra[j] 
      }
     }
     alert(respuesta.join(""))
   }
}
 while (respuesta.includes("_")) 
 /*let adivinar = prompt("Adivina una letra, o hace click en Cancel para dejar de jugar");
 if (adivinar === null) {
    break;} 
    else if (adivinar.length !== 1) {
    alert ("Porfavor escribir 1 letra a la vez.")} 
    else { for (let j = 0; j<palabra.length ;j++) {
     if (palabra[j] === adivinar) {
      console.log(adivinar, palabra[j])
      respuesta[j] = palabra[j] 
     }
    }
  }
} */

alert("Terminaste flaco, sos buenisimo, la palabra era " + palabras)
