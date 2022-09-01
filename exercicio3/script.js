const arraynumero = [2,7,5,3]
const arraystring = ["abacate","uva","abacaxi","banana"]
const arraymisto = [9,4,"caneta","papel", true, false]


const arraynumerocopia = arraynumero.slice()
const arraystringcopia = arraystring.slice()
const arraymistocopia = arraymisto.slice()

const numero = arraynumero
const numerocopia = arraynumerocopia
const string = arraystring
const stringcopia = arraystringcopia
const misto = arraymisto
const mistocopia = arraymistocopia

arraynumerocopia.push(13)

console.log(numero)
console.log(numerocopia)

arraystringcopia.pop()

console.log(string)
console.log(stringcopia)

arraymistocopia.splice(1,1)

console.log(misto)
console.log(mistocopia)
