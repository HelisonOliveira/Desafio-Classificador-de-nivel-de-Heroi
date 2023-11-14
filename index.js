
// Insira seu nome entre aspas

let nome = "helison"

// o seu xp é um numero aleatório
let xp = Math.floor(Math.random() * 11000)//http://devfuria.com.br/javascript/numeros-aleatorios/


//https://horadecodar.com.br/como-saber-se-uma-variavel-e-string-em-javascript/
if (typeof nome !== "string") {
  console.log("insira somente letras")
  return nome
} 

if(xp <= 1000){
  console.log("O herói " + nome +" tem " + xp + " de xp: ele está no nível Ferro")
} else if( xp <= 2000) {
  console.log("O herói " + nome +" tem " + xp + " de xp: ele está no nível Bronze")
} else if( xp <= 5000) {
  console.log("O herói " + nome +" tem " + xp + " de xp: ele está no nível Prata")
} else if( xp <= 7000) {
  console.log("O herói " + nome +" tem " + xp + " de xp: ele está no nível Ouro")
} else if( xp <= 8000) {
  console.log("O herói " + nome +" tem " + xp + " de xp: ele está no nível Platina")
} else if( xp <= 9000) {
  console.log("O herói " + nome +" tem " + xp + " de xp: ele está no nível Ascedente")
} else if( xp <= 10000) {
  console.log("O herói " + nome +" tem " + xp + " de xp: ele está no nível Imortal")
} else if( xp >= 10001) {
  console.log("O herói " + nome +" tem " + xp + " de xp: ele está no nível Radiante")
}

// comecei a fazer o código com switch case, porem encontrei um texto que explica que o switch case trabalha com operador ===, fazendo com que
// não desse pra usar a estrutura. https://pt.stackoverflow.com/questions/418468/usar-switch-para-testar-se-um-valor-est%C3%A1-entre-uma-faixa-de-valores

//switch (xp) {
  //case xp:  (xp < 1001)
    // console.log("O herói " + nome +" tem " + xp + " de xp: ele está no nível Ferro")
      //break
  //case xp: (xp < 5001)
    //console.log("O herói " + nome +" tem " + xp + " de xp: ele está no nível Bronze")
      //break  
//}
