let nome = "helison"
let xp = Math.floor(Math.random() * 10001)//http://devfuria.com.br/javascript/numeros-aleatorios/
console.log(xp);

//https://horadecodar.com.br/como-saber-se-uma-variavel-e-string-em-javascript/
if (typeof nome !== "string") {
  console.log("insira somente letras")
} else console.log(nome);

switch (xp) {
  case xp : xp <= 1000 
    console.log("Você tem " + xp + " de xp: seu está no nível Ferro")
      break;
  case xp: xp <= 2000  
    console.log(xp + " - Bronze")
      break;
  case xp: xp <= 5000  
      console.log(xp + " - Prata")
        break; 
  
}
