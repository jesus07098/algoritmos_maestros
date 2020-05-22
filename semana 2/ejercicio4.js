let number= prompt('Type a number for find the verifier digit');
number=number.split('');
let sum = 0, i=1;

number.forEach(element => sum+=element*i);


console.log(sum);