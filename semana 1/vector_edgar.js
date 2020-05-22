let vector1 = [10]; //normal vector

for (let i = 0; i < 10; i++) {
  vector1.push(Number(prompt(`Digite el numero ${i + 1}`)));
 
}
//Array.filter
const pairVector = vector1.filter(a=>a%2===0) 
document.write(pairVector.sort((a,b)=> (a-b)));
