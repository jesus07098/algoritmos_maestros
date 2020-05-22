let intNumber = Number(prompt("Type a number"));
let numberToBinary = intNumber.toString(2);
let missingDigit = numberToBinary.length;
while (missingDigit % 4 != 0) {
  missingDigit++;
}
numberToBinary = numberToBinary.padStart(missingDigit, "0").split("").reverse().join("");
console.log(parseInt(numberToBinary, 2));

array.forEach(currentItem => {
  
});

for (const item of object) {
  
}

const {propertyName} = objectToDestruct;