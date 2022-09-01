const arraynumero = [2,7,5,3]
const arraystring = ["abacate","uva","abacaxi","banana"]
const arraymisto = [9,4,"caneta","papel", true, false]


const arraynumerocopia = arraynumero.slice()
const arraystringcopia = arraystring.slice()
const arraymistocopia = arraymisto.slice()

arraynumerocopia.push(13)

console.log(arraynumero[0,1,2,3],arraynumerocopia[0,1,2,3,4])


