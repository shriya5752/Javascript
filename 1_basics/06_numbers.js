const score=200
console.log(score)

const balance=new Number(200)//to make sure that it is a certain datattype--we use NEW
// console.log(balance)

// console.log(balance.toString());
// console.log(typeof balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(4));//decimal pts

const otherNumber=23.467382
// console.log(otherNumber.toPrecision(4));

const hundreds=10000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'))


//MATH
console.log(Math);
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))

console.log(Math.random())//between 0 and 1
console.log((Math.random()*10)+1)//perfect now bw 1 to 10

//now we want between certain two numbers say (IMPORTANT)
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)





